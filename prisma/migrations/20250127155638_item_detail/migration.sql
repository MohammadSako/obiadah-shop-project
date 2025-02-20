/*
  Warnings:

  - Added the required column `quantity` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `ItemDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "quantity" INTEGER NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
