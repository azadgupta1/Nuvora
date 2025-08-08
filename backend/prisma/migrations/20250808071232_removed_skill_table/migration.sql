/*
  Warnings:

  - You are about to drop the column `skillId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `Bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_skillId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_skillId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_skillId_fkey";

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_userId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "skillId";

-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "skillId";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "skillId";

-- DropTable
DROP TABLE "Skill";
