/*
  Warnings:

  - Added the required column `category` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "category" TEXT NOT NULL;
