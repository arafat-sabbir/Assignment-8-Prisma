import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookServices } from "./book.service";
import sendResponse from "../../utils/sendResponse";

const addNewBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.addNewBookIntoDb(req.body);
  sendResponse(res, {
    message: "New Book added successfully",
    data: result,
  });
});

export const bookControllers = { addNewBook };
