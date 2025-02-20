/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `ItemDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ItemDetail_url_key" ON "ItemDetail"("url");
