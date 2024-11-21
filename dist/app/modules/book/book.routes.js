"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
// Router To Create A New Book
router.post("/", (0, validateRequest_1.default)(book_validation_1.bookValidations.addNewBookSchema), book_controller_1.bookControllers.addNewBook);
// Router To Get All Books From Database
router.get("/", book_controller_1.bookControllers.getAllBook);
// Router To Get Single Book By bookId From Database
router.get("/:bookId", book_controller_1.bookControllers.getSingleBook);
// Router To Update Single Book By bookId From Database
router.patch("/:bookId", book_controller_1.bookControllers.updateSingleBook);
// Router to Delete Single Book By bookId From Database
router.delete("/:bookId", book_controller_1.bookControllers.deleteSingleBook);
exports.bookRoutes = router;
