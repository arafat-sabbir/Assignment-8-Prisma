import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { memberServices } from "./member.service";
import sendResponse from "../../utils/sendResponse";

// Controller Function to Add A New Member
const addNewMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.addNewMemberIntoDb(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "Member created successfully",
    data: result,
  });
});

// Controller Function to Get All The Members
const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.getAllMembersFromDb();
  sendResponse(res, {
    message: "Members retrieved successfully",
    data: result,
  });
});

// Controller Function To Get Single Member
const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.getSingleMemberFromDb(req.params.memberId);
  sendResponse(res, {
    message: "Member retrieved successfully",
    data: result,
  });
});

// Controller Function To Update Single Member
const updateSingleMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.updateSingleMemberFromDb(
    req.params.memberId,
    req.body
  );
  sendResponse(res, {
    message: "Member updated successfully",
    data: result,
  });
});

// Controller Function To Delete Single Member
const deleteSingleMember = catchAsync(async (req: Request, res: Response) => {
  await memberServices.deleteSingleMemberFromDb(req.params.memberId);
  sendResponse(res, {
    message: "Member successfully deleted",
  });
});

export const memberControllers = {
  addNewMember,
  getAllMembers,
  getSingleMember,
  updateSingleMember,
  deleteSingleMember,
};

