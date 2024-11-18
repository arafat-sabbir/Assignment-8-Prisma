import express from "express";
import { bookControllers } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidations } from "./book.validation";

const router = express.Router();

// Router To Create A New Book
router.post(
  "/",
  validateRequest(bookValidations.addNewBookSchema),
  bookControllers.addNewBook
);

// Router To Get All Books From Database
router.get("/", bookControllers.getAllBook);

// Router To Get Single Book By bookId From Database
router.get("/:bookId", bookControllers.getSingleBook);

// Router To Update Single Book By bookId From Database
router.patch("/:bookId", bookControllers.updateSingleBook);

// Router to Delete Single Book By bookId From Database
router.delete("/:bookId", bookControllers.deleteSingleBook);

export const bookRoutes = router;
