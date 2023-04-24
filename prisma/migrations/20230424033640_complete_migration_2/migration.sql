/*
  Warnings:

  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `size` to the `Drink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isGluten` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drinkId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sidesId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_drinkId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_foodId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- AlterTable
ALTER TABLE "Drink" ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "isGluten" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "price",
ADD COLUMN     "drinkId" INTEGER NOT NULL,
ADD COLUMN     "foodId" INTEGER NOT NULL,
ADD COLUMN     "sidesId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "OrderItem";

-- CreateTable
CREATE TABLE "Sides" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "isVegan" BOOLEAN NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Sides_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_sidesId_fkey" FOREIGN KEY ("sidesId") REFERENCES "Sides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
