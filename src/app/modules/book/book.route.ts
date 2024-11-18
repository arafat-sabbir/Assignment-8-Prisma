import express from "express";
import { bookControllers } from "./book.controller";

const router = express.Router();

router.post("/", bookControllers.addNewBook);

export const bookRoutes = router;