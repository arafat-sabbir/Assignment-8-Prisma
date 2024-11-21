"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowServices = void 0;
const app_1 = require("../../../app");
const borrowBook = async (payload) => {
    return await app_1.prisma.borrow.create({ data: payload });
};
const returnBook = async (payload) => {
    await app_1.prisma.borrow.findUniqueOrThrow({
        where: { borrowId: payload.borrowId },
    });
    return await app_1.prisma.borrow.update({
        where: { borrowId: payload.borrowId },
        data: { returnDate: new Date() },
    });
};
const getOverDueBooks = async () => {
    const today = new Date();
    // Find books where the due date (borrowDate + 14 days) is earlier than today
    return await app_1.prisma.borrow.findMany({
        where: {
            borrowDate: {
                lt: new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days before today
            },
        },
    });
};
exports.borrowServices = { borrowBook, returnBook, getOverDueBooks };
