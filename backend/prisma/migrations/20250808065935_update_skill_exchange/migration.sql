/*
  Warnings:

  - You are about to drop the column `skillWantedInReturn` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skillOfferedId` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `skillWantedId` on the `SkillExchange` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SkillExchange` table. All the data in the column will be lost.
  - Added the required column `requesterId` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responderId` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillOffered` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillRequested` to the `SkillExchange` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SkillExchange" DROP CONSTRAINT "SkillExchange_skillOfferedId_fkey";

-- DropForeignKey
ALTER TABLE "SkillExchange" DROP CONSTRAINT "SkillExchange_skillWantedId_fkey";

-- DropForeignKey
ALTER TABLE "SkillExchange" DROP CONSTRAINT "SkillExchange_userId_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "skillWantedInReturn";

-- AlterTable
ALTER TABLE "SkillExchange" DROP COLUMN "skillOfferedId",
DROP COLUMN "skillWantedId",
DROP COLUMN "userId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "requesterId" INTEGER NOT NULL,
ADD COLUMN     "responderId" INTEGER NOT NULL,
ADD COLUMN     "skillOffered" TEXT NOT NULL,
ADD COLUMN     "skillRequested" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "skillsOffered" TEXT[],
ADD COLUMN     "skillsWanted" TEXT[];

-- AddForeignKey
ALTER TABLE "SkillExchange" ADD CONSTRAINT "SkillExchange_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillExchange" ADD CONSTRAINT "SkillExchange_responderId_fkey" FOREIGN KEY ("responderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
