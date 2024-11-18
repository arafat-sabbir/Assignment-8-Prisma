import express from "express";
import { bookControllers } from "./book.controller";

const router = express.Router();

// Router To Create A New Book
router.post("/", bookControllers.addNewBook);

// Router To Get All Books From Database
router.get("/", bookControllers.getAllBook);

// Router To Get Single Book By bookId From Database
router.get("/:bookId", bookControllers.getSingleBook);

export const bookRoutes = router;
