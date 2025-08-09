/*
  Warnings:

  - Made the column `receiverId` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `skillOfferedName` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `skillWantedName` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_receiverId_fkey";

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "receiverId" SET NOT NULL,
ALTER COLUMN "skillOfferedName" SET NOT NULL,
ALTER COLUMN "skillWantedName" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
