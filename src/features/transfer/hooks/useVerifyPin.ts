import { useMutation } from "@tanstack/react-query";
import { useTransferStore } from "../store/transferStore"
import securityService from "../api/security.service";
import { toast } from "sonner";

export const useVerifyPin = () => {
    const setStep = useTransferStore((state) => state.setStep);

    return useMutation({
        mutationFn: securityService.verifyPin,
        onSuccess: async () => {
            try {
                console.log("PIN verified");

                const response = await securityService.sendOtp();

                console.log("OTP Response:", response);

                toast.success("PIN Verified");

                setStep("OTP");
            } catch (error: any) {
                console.log("Send OTP Error:", error);
                console.log("Response:", error?.response);
                console.log("Data:", error?.response?.data);

                toast.error("Failed to send OTP");
            }
        },

        onError: (error: any) => {
            toast.error(
                error?.response?.data?.message ?? "Incorrect Transaction PIN"
            )
        }
    })
}