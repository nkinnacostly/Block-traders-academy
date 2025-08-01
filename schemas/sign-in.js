const { z } = require("zod");

export const SignUpSchema = z.object({
  email: z
    .string()
    .regex(/^\S+@\S+\.\S+$/)
    .email(),
  username: z.string().min(3, { message: "Username is Required" }),
  referral_code: z.string().optional(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>_-]/, {
      message: "Password must contain at least one special character",
    }),

  notification_status: z.coerce
    .string()
    .transform((val) => (val === "on" ? true : false)),
});
