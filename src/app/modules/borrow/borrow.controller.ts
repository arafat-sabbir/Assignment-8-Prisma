import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { borrowServices } from "./borrow.service";

const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowServices.borrowBook(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "Book Borrowed successfully",
    data: result,
  });
});

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowServices.returnBook(req.body);
  sendResponse(res, {
    statusCode: 200,
    message: "Book Returned successfully",
  });
});

const getOverDueBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowServices.getOverDueBooks();
  sendResponse(res, {
    statusCode: 200,
    message: "Over Due Books retrieved successfully",
    data: result,
  });
});

export const borrowControllers = { borrowBook, returnBook };
