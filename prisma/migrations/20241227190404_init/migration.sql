/*
  Warnings:

  - Added the required column `imageid` to the `ItemDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "imageid" TEXT NOT NULL;
