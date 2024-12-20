import { z } from "zod";

const addNewMemberSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }).email("Email must be a valid email address"),
    phone: z.string({
      required_error: "Phone is required",
      invalid_type_error: "Phone must be a string",
    }),
    membershipDate: z.string({
      required_error: "Membership date is required",
      invalid_type_error: "Membership date must be a valid date",
    }),
  }),
});

export const memberValidations = { addNewMemberSchema };

