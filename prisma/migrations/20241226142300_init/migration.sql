-- AlterTable
CREATE SEQUENCE item_sub_category_id_seq;
ALTER TABLE "Item" ALTER COLUMN "sub_category_id" SET DEFAULT nextval('item_sub_category_id_seq');
ALTER SEQUENCE item_sub_category_id_seq OWNED BY "Item"."sub_category_id";

-- AlterTable
CREATE SEQUENCE itemdetail_item_id_seq;
ALTER TABLE "ItemDetail" ALTER COLUMN "item_id" SET DEFAULT nextval('itemdetail_item_id_seq');
ALTER SEQUENCE itemdetail_item_id_seq OWNED BY "ItemDetail"."item_id";

-- AlterTable
CREATE SEQUENCE subcategory_category_id_seq;
ALTER TABLE "SubCategory" ALTER COLUMN "category_id" SET DEFAULT nextval('subcategory_category_id_seq');
ALTER SEQUENCE subcategory_category_id_seq OWNED BY "SubCategory"."category_id";
