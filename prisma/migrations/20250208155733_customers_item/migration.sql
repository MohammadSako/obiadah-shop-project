/*
  Warnings:

  - Added the required column `originalItemId` to the `CustomersItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomersItem" ADD COLUMN     "originalItemId" TEXT NOT NULL;
