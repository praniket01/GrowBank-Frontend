"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import securityService from "../api/security.service";

export const useSendOtp = () => {
  return useMutation({
    mutationFn: securityService.sendOtp,

    onSuccess: (response) => {
      toast.success(response.data.message);
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
        "Unable to send OTP"
      );
    },
  });
};