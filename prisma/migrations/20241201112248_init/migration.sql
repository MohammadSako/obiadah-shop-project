/*
  Warnings:

  - The primary key for the `inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `inventory_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `inventory_items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "inventory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "inventory_items" DROP CONSTRAINT "inventory_items_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "inventory_items_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "items" ALTER COLUMN "price" SET DATA TYPE TEXT;
