import { apiClient } from "@/lib/axios";
import { SendOtpResponse, VerifyOtpRequest, VerifyOtpResponse, VerifyPinRequest, VerifyPinResponse } from "../types/security.types";

class SecurityService {
    verifyPin(data: VerifyPinRequest) {
        return apiClient.post<VerifyPinResponse>('/transaction/security/verify-pin',
            data
        )
    }

    sendOtp() {
        return apiClient.post<SendOtpResponse>('/transaction/send-otp')
    }

    verifyOtp(data: any) {
        return apiClient.post<VerifyOtpResponse>('/transaction/verify-otp', data)
    }

    setPin(data : {
        pin : string,
        confirmPin : string
    }){
        return apiClient.post('transaction/security/set-pin',data);
    }

}

export default new SecurityService();