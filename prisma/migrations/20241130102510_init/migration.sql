/*
  Warnings:

  - You are about to drop the `bags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `belts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jeans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shirts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `socks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tshirts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `watches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `woolblouses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `details` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "bags";

-- DropTable
DROP TABLE "belts";

-- DropTable
DROP TABLE "hats";

-- DropTable
DROP TABLE "jeans";

-- DropTable
DROP TABLE "pants";

-- DropTable
DROP TABLE "shirts";

-- DropTable
DROP TABLE "socks";

-- DropTable
DROP TABLE "tshirts";

-- DropTable
DROP TABLE "watches";

-- DropTable
DROP TABLE "woolblouses";
