import { Router } from "express";
import { bookRoutes } from "../modules/book/book.route";

const router = Router();

const routes = [
  {
    path: "/books",
    router: bookRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
