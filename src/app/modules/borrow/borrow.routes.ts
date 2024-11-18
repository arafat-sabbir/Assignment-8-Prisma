import { Router } from "express";
import { borrowControllers } from "./borrow.controller";

const router = Router();

router.post("/borrow", borrowControllers.borrowBook);

router.post("/return", borrowControllers.returnBook);

export const borrowRoutes = router;
