import { Borrow } from "@prisma/client";
import { prisma } from "../../../app";

const borrowBook = async (payload: Borrow) => {
  return await prisma.borrow.create({ data: payload });
};

const returnBook = async (payload: any) => {
  await prisma.borrow.findUniqueOrThrow({
    where: { borrowId: payload.borrowId },
  });
  return await prisma.borrow.update({
    where: { borrowId: payload.borrowId },
    data: { returnDate: new Date() },
  });
};

const getOverDueBooks = async () => {
  const today = new Date();
  // Find books where the due date (borrowDate + 14 days) is earlier than today
  return await prisma.borrow.findMany({
    where: {
      borrowDate: {
        lt: new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days before today
      },
    },
  });
};

export const borrowServices = { borrowBook, returnBook, getOverDueBooks };
