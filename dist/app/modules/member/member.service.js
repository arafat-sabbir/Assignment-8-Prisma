"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberServices = void 0;
const app_1 = require("../../../app");
// Service Function To Add A New Member Into Database
const addNewMemberIntoDb = async (data) => {
    const result = await app_1.prisma.member.create({
        data,
    });
    return result;
};
// Service Function To Retrieve All The Members From Database
const getAllMembersFromDb = async () => {
    return await app_1.prisma.member.findMany();
};
// Service Function To Retrieve Specific Member By It's Id From Database
const getSingleMemberFromDb = async (memberId) => {
    return await app_1.prisma.member.findUniqueOrThrow({
        where: { memberId },
    });
};
// Service Function To Update Specific Member By Its Id From Database
const updateSingleMemberFromDb = async (memberId, data) => {
    const initialData = {};
    // Filter out keys with null, undefined, or empty values
    Object.keys(data).forEach((key) => {
        const value = data[key];
        if (value !== null && value !== undefined && value !== "") {
            initialData[key] = value;
        }
    });
    // Ensure the member exists before updating
    await app_1.prisma.member.findUniqueOrThrow({
        where: { memberId },
    });
    // Update the member with filtered data
    return await app_1.prisma.member.update({
        where: { memberId },
        data: initialData,
    });
};
// Delete Specific Member By Its Id From Database
const deleteSingleMemberFromDb = async (memberId) => {
    // Ensure the member exists before deleting
    await app_1.prisma.member.findUniqueOrThrow({
        where: { memberId },
    });
    return await app_1.prisma.member.delete({
        where: { memberId },
    });
};
exports.memberServices = {
    addNewMemberIntoDb,
    getAllMembersFromDb,
    getSingleMemberFromDb,
    updateSingleMemberFromDb,
    deleteSingleMemberFromDb,
};
