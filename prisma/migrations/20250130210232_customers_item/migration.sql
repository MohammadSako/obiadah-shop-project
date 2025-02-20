/*
  Warnings:

  - You are about to drop the column `url` on the `CustomersItem` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `ItemDetail` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ItemDetail_url_key";

-- AlterTable
ALTER TABLE "CustomersItem" DROP COLUMN "url";

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "url";
