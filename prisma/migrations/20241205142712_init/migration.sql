/*
  Warnings:

  - You are about to alter the column `title` on the `ItemDetail` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `alt` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `ItemDetail` required. This step will fail if there are existing NULL values in that column.
  - Made the column `details` on table `ItemDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "alt" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "details" SET NOT NULL;
