// auth.types.ts

export enum UserRole {
  CUSTOMER = "customer",
  ADMIN = "admin",
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  hasTransactionPin : boolean
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name : string
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  user: User;
}