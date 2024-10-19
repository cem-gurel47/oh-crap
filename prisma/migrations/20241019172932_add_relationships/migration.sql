/*
  Warnings:

  - You are about to drop the column `dog-id` on the `Allergy` table. All the data in the column will be lost.
  - You are about to drop the column `image-url` on the `Dog` table. All the data in the column will be lost.
  - You are about to drop the column `owner-id` on the `Dog` table. All the data in the column will be lost.
  - You are about to drop the column `email-address` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `phone-number` on the `Owner` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email_address]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dog_id` to the `Allergy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Dog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_address` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Allergy" DROP COLUMN "dog-id",
ADD COLUMN     "dog_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Dog" DROP COLUMN "image-url",
DROP COLUMN "owner-id",
ADD COLUMN     "image_url" TEXT,
ADD COLUMN     "owner_id" INTEGER NOT NULL,
ALTER COLUMN "note" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "email-address",
DROP COLUMN "phone-number",
ADD COLUMN     "email_address" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Owner_email_address_key" ON "Owner"("email_address");

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
