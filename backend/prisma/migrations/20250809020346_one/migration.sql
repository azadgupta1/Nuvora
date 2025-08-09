/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `requesterId` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `responderId` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `skillOffered` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `skillRequested` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `skillsOffered` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `skillsWanted` on the `User` table. All the data in the column will be lost.
  - Added the required column `skillId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillId` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillOfferedId` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillWantedId` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SkillExchange" DROP CONSTRAINT "SkillExchange_requesterId_fkey";

-- DropForeignKey
ALTER TABLE "SkillExchange" DROP CONSTRAINT "SkillExchange_responderId_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "skillId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "skillId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "skillId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SkillExchange" DROP COLUMN "createdAt",
DROP COLUMN "requesterId",
DROP COLUMN "responderId",
DROP COLUMN "skillOffered",
DROP COLUMN "skillRequested",
ADD COLUMN     "skillOfferedId" INTEGER NOT NULL,
ADD COLUMN     "skillWantedId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "skillsOffered",
DROP COLUMN "skillsWanted";

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "skillsOffered" TEXT[],
    "skillsWanted" TEXT[],
    "category" TEXT,
    "description" TEXT,
    "image" TEXT,
    "duration" TEXT,
    "location" TEXT,
    "availability" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_userId_key" ON "Skill"("userId");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillExchange" ADD CONSTRAINT "SkillExchange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillExchange" ADD CONSTRAINT "SkillExchange_skillOfferedId_fkey" FOREIGN KEY ("skillOfferedId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillExchange" ADD CONSTRAINT "SkillExchange_skillWantedId_fkey" FOREIGN KEY ("skillWantedId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
