import express from "express";
import { bookControllers } from "./book.controller";

const router = express.Router();

// Router To Create A New Book
router.post("/", bookControllers.addNewBook);

// router.get("/", bookControllers.);

export const bookRoutes = router;
