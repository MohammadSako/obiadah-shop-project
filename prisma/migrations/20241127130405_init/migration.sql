/*
  Warnings:

  - You are about to drop the `lower_men_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lower_women_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `top_men_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `top_women_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "inventory_items" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "lower_men_categories";

-- DropTable
DROP TABLE "lower_women_categories";

-- DropTable
DROP TABLE "top_men_categories";

-- DropTable
DROP TABLE "top_women_categories";

-- CreateTable
CREATE TABLE "tshirts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "tshirts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shirts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "shirts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "woolblouses" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "woolblouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hats" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "hats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watches" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "watches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jeans" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "jeans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pants" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "pants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socks" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "socks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "belts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "belts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bags" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "bags_pkey" PRIMARY KEY ("id")
);
