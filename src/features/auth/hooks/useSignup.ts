import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import authService from "../api/auth.service";

export const useSignup = () => {
    
  return useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      toast.success(data.statusText || "Account created successfully");
    },

    onError: (error: any) => {
      console.log("Signup Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);

      toast.error(
        error?.response?.data?.message ??
          "Unable to create account"
      );
    },
  });
};