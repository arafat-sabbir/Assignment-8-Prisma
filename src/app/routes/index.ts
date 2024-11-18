import { Router } from "express";
import { bookRoutes } from "../modules/book/book.route";
import { memberRoutes } from "../modules/member/member.route";

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
];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
