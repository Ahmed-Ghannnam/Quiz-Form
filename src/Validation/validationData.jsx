import Joi from "joi";

export const dataSchema = Joi.object({
  Name: Joi.string().min(3).max(50).required(),

  Email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
