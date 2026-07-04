import { email, z } from "zod";

export const loginSchema = z.object({
    email : z.string().trim().email("Invalid Email Address"),
    password : z.string().min(8, "Password must contain atlesast 8 characters"),

});

export type LoginForm = z.infer<typeof loginSchema>;