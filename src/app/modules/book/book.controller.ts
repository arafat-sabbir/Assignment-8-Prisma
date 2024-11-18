import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookServices } from "./book.service";

const addNewBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.addNewBookIntoDb(req.body);
  res.send(result);
});

export const bookControllers = { addNewBook };
