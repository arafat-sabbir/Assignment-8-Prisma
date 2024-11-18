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




export const borrowServices = { borrowBook, returnBook };
