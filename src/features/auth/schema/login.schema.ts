import { email, z } from "zod";

export const loginSchema = z.object({
    email : z.string().trim().email("Invalid Email Address"),
    name : z.string().trim().min(3,"Name should be atleast of 3 letters"),
    password : z.string().min(8, "Password must contain atlesast 8 characters"),

});

export const signinSchema = z.object({
    email : z.string().trim().email("Invalid Email Address"),
    // name : z.string().trim().min(3,"Name should be atleast of 3 letters"),
    password : z.string().min(8, "Password must contain atlesast 8 characters"),

});

export type LoginForm = z.infer<typeof loginSchema>;
export type SigninForm = z.infer<typeof signinSchema>;