-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_id_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_id_fkey";

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "SubCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
