import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookServices } from "./book.service";
import sendResponse from "../../utils/sendResponse";

// Controller Function to Add A New Book
const addNewBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.addNewBookIntoDb(req.body);
  sendResponse(res, {
    message: "New Book added successfully",
    data: result,
  });
});

//Controller Function to Get All The Books
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getAllBookFromDb();
  sendResponse(res, {
    message: "All Books retrieved successfully",
    data: result,
  });
});

// Controller Function To Get Single Book
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getSingleBookFromDb(req.params.bookId);
  sendResponse(res, {
    message: "Single Book retrieved successfully",
    data: result,
  });
});

export const bookControllers = { addNewBook, getAllBook, getSingleBook };
