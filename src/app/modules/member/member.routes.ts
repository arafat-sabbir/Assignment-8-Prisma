import express from "express";
import { memberControllers } from "./member.controller";
import validateRequest from "../../middlewares/validateRequest";
import { memberValidations } from "./member.validation";

const router = express.Router();

// Router To Create A New Member
router.post(
  "/",
  validateRequest(memberValidations.addNewMemberSchema),
  memberControllers.addNewMember
);

// Router To Get All Members From Database
router.get("/", memberControllers.getAllMembers);

// Router To Get Single Member By memberId From Database
router.get("/:memberId", memberControllers.getSingleMember);

// Router To Update Single Member By memberId From Database
router.patch("/:memberId", memberControllers.updateSingleMember);

// Router to Delete Single Member By memberId From Database
router.delete("/:memberId", memberControllers.deleteSingleMember);

export const memberRoutes = router;

