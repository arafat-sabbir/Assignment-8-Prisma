import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookServices } from "./book.service";
import sendResponse from "../../utils/sendResponse";

// Controller Function to Add A New Book
const addNewBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.addNewBookIntoDb(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "Book created successfully",
    data: result,
  });
});

//Controller Function to Get All The Books
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getAllBookFromDb();
  sendResponse(res, {
    message: "Books retrieved successfully",
    data: result,
  });
});

// Controller Function To Get Single Book
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getSingleBookFromDb(req.params.bookId);
  sendResponse(res, {
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.updateSingleBookFromDb(
    req.params.bookId,
    req.body
  );
  sendResponse(res, {
    message: "Book updated successfully",
    data: result,
  });
});

export const bookControllers = { addNewBook, getAllBook, getSingleBook,updateSingleBook };
