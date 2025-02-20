-- DropForeignKey
ALTER TABLE "CustomersItem" DROP CONSTRAINT "CustomersItem_customersOrdersId_fkey";

-- AlterTable
CREATE SEQUENCE customersitem_customersordersid_seq;
ALTER TABLE "CustomersItem" ALTER COLUMN "customersOrdersId" SET DEFAULT nextval('customersitem_customersordersid_seq');
ALTER SEQUENCE customersitem_customersordersid_seq OWNED BY "CustomersItem"."customersOrdersId";

-- AddForeignKey
ALTER TABLE "CustomersItem" ADD CONSTRAINT "CustomersItem_customersOrdersId_fkey" FOREIGN KEY ("customersOrdersId") REFERENCES "CustomersOrders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
