/*
  Warnings:

  - The primary key for the `Owner` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Dog" DROP CONSTRAINT "Dog_owner_id_fkey";

-- AlterTable
ALTER TABLE "Dog" ALTER COLUMN "owner_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Owner_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Owner_id_seq";

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
