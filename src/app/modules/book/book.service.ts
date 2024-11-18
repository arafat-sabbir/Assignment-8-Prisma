import { Book } from "@prisma/client";
import { prisma } from "../../../app";

// Service Function To Add A New Book Into Database
const addNewBookIntoDb = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

const getAllBookFromDb = async () => {
  return await prisma.book.findMany();
};

const getSingleBookFromDb = async (bookId: string) => {
  return await prisma.book.findUnique({
    where: { bookId },
  });
};

export const bookServices = {
  addNewBookIntoDb,
  getAllBookFromDb,
  getSingleBookFromDb,
};
