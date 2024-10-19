/*
  Warnings:

  - You are about to drop the `allergy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `owner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "allergy";

-- DropTable
DROP TABLE "dog";

-- DropTable
DROP TABLE "owner";

-- CreateTable
CREATE TABLE "Allergy" (
    "id" SERIAL NOT NULL,
    "dog-id" TEXT NOT NULL,
    "allergy" TEXT NOT NULL,

    CONSTRAINT "Allergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "owner-id" TEXT NOT NULL,
    "allergies-id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "image-url" TEXT NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email-address" TEXT NOT NULL,
    "phone-number" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);
