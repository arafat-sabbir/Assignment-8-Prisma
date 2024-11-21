"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookServices = void 0;
const app_1 = require("../../../app");
// Service Function To Add A New Book Into Database
const addNewBookIntoDb = async (data) => {
    const result = await app_1.prisma.book.create({
        data,
    });
    return result;
};
// Service Function To Retrieve All The Books From Database
const getAllBookFromDb = async () => {
    return await app_1.prisma.book.findMany();
};
// Service Function To Retrieve Specific  Book By It's Id From Database
const getSingleBookFromDb = async (bookId) => {
    return await app_1.prisma.book.findUniqueOrThrow({
        where: { bookId },
    });
};
// Service Function To Update Specific Book By Its Id From Database
const updateSingleBookFromDb = async (bookId, data) => {
    const initialData = {};
    Object.keys(data).forEach((key) => {
        const value = data[key]; // Safely store value in a variable
        if (value !== null && value !== undefined && value !== "") {
            initialData[key] = value;
        }
    });
    // Ensure the book exists before updating
    await app_1.prisma.book.findUniqueOrThrow({
        where: { bookId },
    });
    // Update the book with filtered data
    return await app_1.prisma.book.update({
        where: { bookId },
        data: initialData,
    });
};
// Delete Specific Book By Its Id From Database
const deleteSingleBookFromDb = async (bookId) => {
    // Ensure the book exists before deleting
    await app_1.prisma.book.findUniqueOrThrow({
        where: { bookId },
    });
    return await app_1.prisma.book.delete({
        where: { bookId },
    });
};
exports.bookServices = {
    addNewBookIntoDb,
    getAllBookFromDb,
    getSingleBookFromDb,
    updateSingleBookFromDb,
    deleteSingleBookFromDb,
};
