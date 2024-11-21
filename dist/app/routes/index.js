"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_routes_1 = require("../modules/book/book.routes");
const member_routes_1 = require("../modules/member/member.routes");
const borrow_routes_1 = require("../modules/borrow/borrow.routes");
const router = (0, express_1.Router)();
const routes = [
    {
        path: "/books",
        router: book_routes_1.bookRoutes,
    },
    {
        path: "/members",
        router: member_routes_1.memberRoutes,
    },
    {
        path: "",
        router: borrow_routes_1.borrowRoutes,
    },
];
routes.forEach((route) => router.use(route.path, route.router));
const allRoutes = router;
exports.default = allRoutes;
