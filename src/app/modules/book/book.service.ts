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
  return await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });
};

// Service Function To Update Specific Book By Its Id From Database
const updateSingleBookFromDb = async (
  bookId: string,
  data: Record<string, any>
) => {
  const initialData: Record<string, unknown> = {};
  Object.keys(data).forEach((key) => {
    const value = data[key]; // Safely store value in a variable
    if (value !== null && value !== undefined && value !== "") {
      initialData[key] = value;
    }
  });

  // Ensure the book exists before updating
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  // Update the book with filtered data
  return await prisma.book.update({
    where: { bookId },
    data: initialData,
  });
};

// Delete Specific Book By Its Id From Database
const deleteSingleBookFromDb = async (bookId: string) => {
  // Ensure the book exists before deleting
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });
  return await prisma.book.delete({
    where: { bookId },
  });
};

export const bookServices = {
  addNewBookIntoDb,
  getAllBookFromDb,
  getSingleBookFromDb,
  updateSingleBookFromDb,
  deleteSingleBookFromDb,
};
