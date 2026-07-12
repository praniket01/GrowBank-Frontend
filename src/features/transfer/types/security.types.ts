export interface VerifyPinRequest {
    pin : string
}

export interface VerifyPinResponse {
    success: boolean,
    message : string
}

export interface SendOtpResponse {
    success : boolean,
    message : string
}

export interface VerifyOtpRequest {
    otp : string
}

export interface VerifyOtpResponse { 
    success : boolean
}