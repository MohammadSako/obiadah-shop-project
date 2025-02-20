/*
  Warnings:

  - You are about to drop the column `customersOrdersId` on the `ItemDetail` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `ItemDetail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_customersOrdersId_fkey";

-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "customersOrdersId",
DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "CustomersItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "dashboardType" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageid" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "customersOrdersId" INTEGER,

    CONSTRAINT "CustomersItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomersItem_url_key" ON "CustomersItem"("url");

-- AddForeignKey
ALTER TABLE "CustomersItem" ADD CONSTRAINT "CustomersItem_customersOrdersId_fkey" FOREIGN KEY ("customersOrdersId") REFERENCES "CustomersOrders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
