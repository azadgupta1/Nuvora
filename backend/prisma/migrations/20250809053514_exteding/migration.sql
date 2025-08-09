-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "message" TEXT,
ADD COLUMN     "receiverId" INTEGER,
ADD COLUMN     "skillOfferedName" TEXT,
ADD COLUMN     "skillWantedName" TEXT;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
