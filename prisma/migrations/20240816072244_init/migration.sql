/*
  Warnings:

  - You are about to drop the `Kriteria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Kriteria` DROP FOREIGN KEY `Kriteria_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `CJ` DOUBLE NULL,
    ADD COLUMN `HC` DOUBLE NULL,
    ADD COLUMN `HJ` DOUBLE NULL,
    ADD COLUMN `HK` DOUBLE NULL,
    ADD COLUMN `HM` DOUBLE NULL,
    ADD COLUMN `HS` DOUBLE NULL,
    ADD COLUMN `KC` DOUBLE NULL,
    ADD COLUMN `KJ` DOUBLE NULL,
    ADD COLUMN `MC` DOUBLE NULL,
    ADD COLUMN `MJ` DOUBLE NULL,
    ADD COLUMN `MK` DOUBLE NULL,
    ADD COLUMN `MS` DOUBLE NULL,
    ADD COLUMN `SC` DOUBLE NULL,
    ADD COLUMN `SJ` DOUBLE NULL,
    ADD COLUMN `SK` DOUBLE NULL;

-- DropTable
DROP TABLE `Kriteria`;
