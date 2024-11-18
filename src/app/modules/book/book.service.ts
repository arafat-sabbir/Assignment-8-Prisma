import { Book } from "@prisma/client";
import { prisma } from "../../../app";


// Service Function To Add A New Book Into Database
const addNewBookIntoDb = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};


// Service Function To Retrieve All The Books From Database
const getAllBookFromDb = async () => {
  return await prisma.book.findMany();
};


// Service Function To Retrieve Specific  Book By It's Id From Database
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
