import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({message:"Invalid email address"}).min(1, "Email is required"), // Replace `.nonempty` with `.min(1)`
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .min(1, "Password is required"), // Replace `.nonempty` with `.min(1)`
});
