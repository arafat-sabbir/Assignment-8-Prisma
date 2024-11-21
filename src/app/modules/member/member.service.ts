import { Member } from "@prisma/client";
import { prisma } from "../../../app";

// Service Function To Add A New Member Into Database
const addNewMemberIntoDb = async (data: Member) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

// Service Function To Retrieve All The Members From Database
const getAllMembersFromDb = async () => {
  return await prisma.member.findMany();
};

// Service Function To Retrieve Specific Member By It's Id From Database
const getSingleMemberFromDb = async (memberId: string) => {
  return await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });
};

// Service Function To Update Specific Member By Its Id From Database
const updateSingleMemberFromDb = async (
  memberId: string,
  data: Record<string, unknown>
) => {
  const initialData: Record<string, unknown> = {};

  // Filter out keys with null, undefined, or empty values
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value !== null && value !== undefined && value !== "") {
      initialData[key] = value;
    }
  });

  // Ensure the member exists before updating
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  // Update the member with filtered data
  return await prisma.member.update({
    where: { memberId },
    data: initialData,
  });
};

// Delete Specific Member By Its Id From Database
const deleteSingleMemberFromDb = async (memberId: string) => {
  // Ensure the member exists before deleting
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });
  return await prisma.member.delete({
    where: { memberId },
  });
};

export const memberServices = {
  addNewMemberIntoDb,
  getAllMembersFromDb,
  getSingleMemberFromDb,
  updateSingleMemberFromDb,
  deleteSingleMemberFromDb,
};
