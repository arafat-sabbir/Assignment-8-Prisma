import { Router } from "express";
import { borrowControllers } from "./borrow.controller";

const router = Router();

router.post("/borrow", borrowControllers.borrowBook);

router.post("/return", borrowControllers.returnBook);

router.get("/overdue", borrowControllers.getOverDueBooks);

export const borrowRoutes = router;
