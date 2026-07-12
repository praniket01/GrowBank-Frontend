"use clients"
import securityService from "@/features/transfer/api/security.service"
import { Mutation, useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { toast } from "sonner"


export const useSetPin = () => {

    const router = useRouter();

    return useMutation({
        mutationFn: securityService.setPin,
        onSuccess: (response) => {
            toast.success("Transaction PIN created successfully");
            router.replace('/dashboard');
        },
        onError: (error: any) => {
            toast.error(
                error?.response?.data?.message ??
                "Unable to create Transaction OTP"
            );
        }
    })
}