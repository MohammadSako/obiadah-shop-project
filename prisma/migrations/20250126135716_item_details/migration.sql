-- AlterTable
ALTER TABLE "ItemDetail" ADD COLUMN     "customersOrdersId" INTEGER;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_customersOrdersId_fkey" FOREIGN KEY ("customersOrdersId") REFERENCES "CustomersOrders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
