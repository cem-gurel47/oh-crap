import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

class S3 {
  private client: S3Client;
  private maxSizeBytes: number = 5 * 1024 * 1024; // 5MB limit
  private allowedTypes: string[] = ["image/jpeg", "image/png", "image/gif"];

  constructor() {
    this.client = new S3Client({
      region: "auto",
      endpoint: process.env.R2_ENDPOINT ?? "",
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
      },
    });
  }

  async upload(file: File) {
    if (!this.allowedTypes.includes(file.type)) {
      throw new Error("File type not allowed");
    }

    if (file.size > this.maxSizeBytes) {
      throw new Error("File size exceeds limit");
    }

    try {
      const key = `${uuidv4()}-${file.name}`;
      const command = new PutObjectCommand({
        Bucket: process.env.R2_BUCKET ?? "",
        Key: key,
        Body: file,
        ContentType: file.type,
      });

      await this.client.send(command);
      return key;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to upload file");
    }
  }
}

export default new S3();
