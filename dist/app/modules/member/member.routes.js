"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
// Router To Create A New Member
router.post("/", (0, validateRequest_1.default)(member_validation_1.memberValidations.addNewMemberSchema), member_controller_1.memberControllers.addNewMember);
// Router To Get All Members From Database
router.get("/", member_controller_1.memberControllers.getAllMembers);
// Router To Get Single Member By memberId From Database
router.get("/:memberId", member_controller_1.memberControllers.getSingleMember);
// Router To Update Single Member By memberId From Database
router.patch("/:memberId", member_controller_1.memberControllers.updateSingleMember);
// Router to Delete Single Member By memberId From Database
router.delete("/:memberId", member_controller_1.memberControllers.deleteSingleMember);
exports.memberRoutes = router;
