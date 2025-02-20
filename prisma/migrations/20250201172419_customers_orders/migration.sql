/*
  Warnings:

  - Added the required column `totalall` to the `CustomersOrders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomersOrders" ADD COLUMN     "totalall" INTEGER NOT NULL;
