"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import securityService from "../api/security.service";
import { useTransferStore } from "../store/transferStore";

export const useVerifyOtp = () => {

    const setTransaction =
        useTransferStore(
            state => state.setTransaction
        );
    const queryClient = useQueryClient();
    const setStep = useTransferStore(
        state => state.setStep
    );

    return useMutation({

        mutationFn: securityService.verifyOtp,

        onSuccess: (response) => {

            queryClient.invalidateQueries({
                queryKey : ["balance"],
            });
            toast.success("Transaction Successful");

            setTransaction(response.data?.success)
            setStep("PROCESSING");

        },

        onError: (error: any) => {

            toast.error(
                error?.response?.data?.message ??
                "Invalid OTP"
            );

        }

    });

};