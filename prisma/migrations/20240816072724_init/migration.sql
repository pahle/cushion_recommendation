/*
  Warnings:

  - You are about to alter the column `CJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `HC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `HJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `HK` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `HM` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `HS` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `KC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `KJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `MC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `MJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `MK` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `MS` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `SC` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `SJ` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `SK` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `CJ` DOUBLE NULL,
    MODIFY `HC` DOUBLE NULL,
    MODIFY `HJ` DOUBLE NULL,
    MODIFY `HK` DOUBLE NULL,
    MODIFY `HM` DOUBLE NULL,
    MODIFY `HS` DOUBLE NULL,
    MODIFY `KC` DOUBLE NULL,
    MODIFY `KJ` DOUBLE NULL,
    MODIFY `MC` DOUBLE NULL,
    MODIFY `MJ` DOUBLE NULL,
    MODIFY `MK` DOUBLE NULL,
    MODIFY `MS` DOUBLE NULL,
    MODIFY `SC` DOUBLE NULL,
    MODIFY `SJ` DOUBLE NULL,
    MODIFY `SK` DOUBLE NULL;
