/*
  Warnings:

  - You are about to drop the column `hm` on the `User` table. All the data in the column will be lost.
  - Added the required column `CJ` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HC` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HJ` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HK` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HM` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HS` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `KC` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `KJ` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MC` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MJ` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MK` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MS` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SC` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SJ` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SK` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hm`,
    ADD COLUMN `CJ` DOUBLE NOT NULL,
    ADD COLUMN `HC` DOUBLE NOT NULL,
    ADD COLUMN `HJ` DOUBLE NOT NULL,
    ADD COLUMN `HK` DOUBLE NOT NULL,
    ADD COLUMN `HM` DOUBLE NOT NULL,
    ADD COLUMN `HS` DOUBLE NOT NULL,
    ADD COLUMN `KC` DOUBLE NOT NULL,
    ADD COLUMN `KJ` DOUBLE NOT NULL,
    ADD COLUMN `MC` DOUBLE NOT NULL,
    ADD COLUMN `MJ` DOUBLE NOT NULL,
    ADD COLUMN `MK` DOUBLE NOT NULL,
    ADD COLUMN `MS` DOUBLE NOT NULL,
    ADD COLUMN `SC` DOUBLE NOT NULL,
    ADD COLUMN `SJ` DOUBLE NOT NULL,
    ADD COLUMN `SK` DOUBLE NOT NULL;
