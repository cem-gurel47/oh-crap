-- CreateTable
CREATE TABLE "allergy" (
    "id" SERIAL NOT NULL,
    "dog-id" TEXT NOT NULL,
    "allergy" TEXT NOT NULL,

    CONSTRAINT "allergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "owner-id" TEXT NOT NULL,
    "allergies-id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "image-url" TEXT NOT NULL,

    CONSTRAINT "dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email-address" TEXT NOT NULL,
    "phone-number" TEXT NOT NULL,

    CONSTRAINT "owner_pkey" PRIMARY KEY ("id")
);
