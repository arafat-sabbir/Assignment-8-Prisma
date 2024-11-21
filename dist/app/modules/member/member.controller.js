"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const member_service_1 = require("./member.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller Function to Add A New Member
const addNewMember = (0, catchAsync_1.default)(async (req, res) => {
    const result = await member_service_1.memberServices.addNewMemberIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Member created successfully",
        data: result,
    });
});
// Controller Function to Get All The Members
const getAllMembers = (0, catchAsync_1.default)(async (req, res) => {
    const result = await member_service_1.memberServices.getAllMembersFromDb();
    (0, sendResponse_1.default)(res, {
        message: "Members retrieved successfully",
        data: result,
    });
});
// Controller Function To Get Single Member
const getSingleMember = (0, catchAsync_1.default)(async (req, res) => {
    const result = await member_service_1.memberServices.getSingleMemberFromDb(req.params.memberId);
    (0, sendResponse_1.default)(res, {
        message: "Member retrieved successfully",
        data: result,
    });
});
// Controller Function To Update Single Member
const updateSingleMember = (0, catchAsync_1.default)(async (req, res) => {
    const result = await member_service_1.memberServices.updateSingleMemberFromDb(req.params.memberId, req.body);
    (0, sendResponse_1.default)(res, {
        message: "Member updated successfully",
        data: result,
    });
});
// Controller Function To Delete Single Member
const deleteSingleMember = (0, catchAsync_1.default)(async (req, res) => {
    await member_service_1.memberServices.deleteSingleMemberFromDb(req.params.memberId);
    (0, sendResponse_1.default)(res, {
        message: "Member successfully deleted",
    });
});
exports.memberControllers = {
    addNewMember,
    getAllMembers,
    getSingleMember,
    updateSingleMember,
    deleteSingleMember,
};
