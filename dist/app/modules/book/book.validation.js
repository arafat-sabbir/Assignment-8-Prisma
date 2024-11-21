"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidations = void 0;
const zod_1 = require("zod");
const addNewBookSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
        genre: zod_1.z.string({
            required_error: "Genre is required",
            invalid_type_error: "Genre must be a string",
        }),
        publishedYear: zod_1.z.number({
            required_error: "Published year is required",
            invalid_type_error: "Published year must be a number",
        }),
        totalCopies: zod_1.z.number({
            required_error: "Total copies is required",
            invalid_type_error: "Total copies must be a number",
        }),
        availableCopies: zod_1.z.number({
            required_error: "Available copies is required",
            invalid_type_error: "Available copies must be a number",
        }),
    }),
});
exports.bookValidations = { addNewBookSchema };
