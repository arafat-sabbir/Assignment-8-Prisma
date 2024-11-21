"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const book_service_1 = require("./book.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller Function to Add A New Book
const addNewBook = (0, catchAsync_1.default)(async (req, res) => {
    const result = await book_service_1.bookServices.addNewBookIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Book created successfully",
        data: result,
    });
});
//Controller Function to Get All The Books
const getAllBook = (0, catchAsync_1.default)(async (req, res) => {
    const result = await book_service_1.bookServices.getAllBookFromDb();
    (0, sendResponse_1.default)(res, {
        message: "Books retrieved successfully",
        data: result,
    });
});
// Controller Function To Get Single Book
const getSingleBook = (0, catchAsync_1.default)(async (req, res) => {
    const result = await book_service_1.bookServices.getSingleBookFromDb(req.params.bookId);
    (0, sendResponse_1.default)(res, {
        message: "Book retrieved successfully",
        data: result,
    });
});
// Controller Function To Update Single Book
const updateSingleBook = (0, catchAsync_1.default)(async (req, res) => {
    const result = await book_service_1.bookServices.updateSingleBookFromDb(req.params.bookId, req.body);
    (0, sendResponse_1.default)(res, {
        message: "Book updated successfully",
        data: result,
    });
});
// Controller Function To Update Single Book
const deleteSingleBook = (0, catchAsync_1.default)(async (req, res) => {
    await book_service_1.bookServices.deleteSingleBookFromDb(req.params.bookId);
    (0, sendResponse_1.default)(res, {
        message: "Book successfully deleted",
    });
});
exports.bookControllers = {
    addNewBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook,
};
