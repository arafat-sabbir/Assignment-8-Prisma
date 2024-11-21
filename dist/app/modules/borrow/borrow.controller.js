"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const borrow_service_1 = require("./borrow.service");
const borrowBook = (0, catchAsync_1.default)(async (req, res) => {
    const result = await borrow_service_1.borrowServices.borrowBook(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Book Borrowed successfully",
        data: result,
    });
});
const returnBook = (0, catchAsync_1.default)(async (req, res) => {
    await borrow_service_1.borrowServices.returnBook(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Book Returned successfully",
    });
});
const getOverDueBooks = (0, catchAsync_1.default)(async (req, res) => {
    const result = await borrow_service_1.borrowServices.getOverDueBooks();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Overdue borrow list fetched",
        data: result,
    });
});
exports.borrowControllers = { borrowBook, returnBook, getOverDueBooks };
