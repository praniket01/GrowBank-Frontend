"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import transferService from "../api/transfer.service";

import { useTransferStore } from "../store/transferStore";

export const useInitiateTransfer = () => {

  const setStep = useTransferStore(
    (state) => state.setStep
  );

  return useMutation({

    mutationFn: transferService.initiateTransfer,

    onSuccess: (response) => {

      toast.success(response.data.message);

      setStep("PIN");

    },

    onError: (error: any) => {

      toast.error(
        error?.response?.data?.message ??
        "Unable to initiate transfer"
      );

    },

  });

};