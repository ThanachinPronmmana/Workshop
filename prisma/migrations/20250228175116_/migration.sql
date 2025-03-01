/*
  Warnings:

  - You are about to drop the column `createdAdd` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAdd` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `createdAdd` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAdd` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAdd` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAdd` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `cratedAdd` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAdd` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `createdAdd` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAdd` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `createdAdd` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAdd` on the `user` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` DROP COLUMN `createdAdd`,
    DROP COLUMN `updatedAdd`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `createdAdd`,
    DROP COLUMN `updatedAdd`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `createdAdd`,
    DROP COLUMN `updatedAdd`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `cratedAdd`,
    DROP COLUMN `updatedAdd`,
    ADD COLUMN `cratedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `createdAdd`,
    DROP COLUMN `updatedAdd`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAdd`,
    DROP COLUMN `updatedAdd`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
