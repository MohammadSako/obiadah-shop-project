/*
  Warnings:

  - Added the required column `gender` to the `inventory_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `inventory_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inventory_items" ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
