/*
  Warnings:

  - You are about to drop the column `CJ` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `HC` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `HJ` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `HK` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `HM` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `HS` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `KC` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `KJ` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `MC` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `MJ` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `MK` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `MS` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `SC` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `SJ` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `SK` on the `User` table. All the data in the column will be lost.
  - Added the required column `hm` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `CJ`,
    DROP COLUMN `HC`,
    DROP COLUMN `HJ`,
    DROP COLUMN `HK`,
    DROP COLUMN `HM`,
    DROP COLUMN `HS`,
    DROP COLUMN `KC`,
    DROP COLUMN `KJ`,
    DROP COLUMN `MC`,
    DROP COLUMN `MJ`,
    DROP COLUMN `MK`,
    DROP COLUMN `MS`,
    DROP COLUMN `SC`,
    DROP COLUMN `SJ`,
    DROP COLUMN `SK`,
    ADD COLUMN `hm` VARCHAR(191) NOT NULL;
