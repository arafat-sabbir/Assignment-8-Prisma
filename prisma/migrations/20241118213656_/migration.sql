-- AlterTable
ALTER TABLE "BorrowRecord" ALTER COLUMN "borrowDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "returnDate" DROP NOT NULL;
