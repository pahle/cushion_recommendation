/*
  Warnings:

  - Made the column `CJ` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HC` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HJ` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HK` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HM` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `HS` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `KC` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `KJ` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `MC` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `MJ` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `MK` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `MS` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SC` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SJ` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `SK` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `CJ` DOUBLE NOT NULL,
    MODIFY `HC` DOUBLE NOT NULL,
    MODIFY `HJ` DOUBLE NOT NULL,
    MODIFY `HK` DOUBLE NOT NULL,
    MODIFY `HM` DOUBLE NOT NULL,
    MODIFY `HS` DOUBLE NOT NULL,
    MODIFY `KC` DOUBLE NOT NULL,
    MODIFY `KJ` DOUBLE NOT NULL,
    MODIFY `MC` DOUBLE NOT NULL,
    MODIFY `MJ` DOUBLE NOT NULL,
    MODIFY `MK` DOUBLE NOT NULL,
    MODIFY `MS` DOUBLE NOT NULL,
    MODIFY `SC` DOUBLE NOT NULL,
    MODIFY `SJ` DOUBLE NOT NULL,
    MODIFY `SK` DOUBLE NOT NULL;
