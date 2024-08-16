/*
  Warnings:

  - You are about to alter the column `CJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `HC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `HJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `HK` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `HM` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `HS` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `KC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `KJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `MC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `MJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `MK` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `MS` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `SC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `SJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `SK` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `CJ` VARCHAR(191) NOT NULL,
    MODIFY `HC` VARCHAR(191) NOT NULL,
    MODIFY `HJ` VARCHAR(191) NOT NULL,
    MODIFY `HK` VARCHAR(191) NOT NULL,
    MODIFY `HM` VARCHAR(191) NOT NULL,
    MODIFY `HS` VARCHAR(191) NOT NULL,
    MODIFY `KC` VARCHAR(191) NOT NULL,
    MODIFY `KJ` VARCHAR(191) NOT NULL,
    MODIFY `MC` VARCHAR(191) NOT NULL,
    MODIFY `MJ` VARCHAR(191) NOT NULL,
    MODIFY `MK` VARCHAR(191) NOT NULL,
    MODIFY `MS` VARCHAR(191) NOT NULL,
    MODIFY `SC` VARCHAR(191) NOT NULL,
    MODIFY `SJ` VARCHAR(191) NOT NULL,
    MODIFY `SK` VARCHAR(191) NOT NULL;
