/*
  Warnings:

  - Added the required column `url` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "url" TEXT NOT NULL;
