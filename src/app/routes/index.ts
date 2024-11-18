import { Router } from "express";
import { bookRoutes } from "../modules/book/book.routes";
import { memberRoutes } from "../modules/member/member.routes";
import { borrowRoutes } from "../modules/borrow/borrow.routes";

const router = Router();

const routes = [
  {
    path: "/books",
    router: bookRoutes,
  },
  {
    path: "/members",
    router: memberRoutes,
  },
  {
    path: "",
    router: borrowRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
