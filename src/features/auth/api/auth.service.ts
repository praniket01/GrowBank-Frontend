import { apiClient } from "@/lib/axios";
import { LoginRequest, LoginResponse, SignupRequest } from "../types/auth.types";

class AuthService {
    login(data : LoginRequest){
        return apiClient.post<LoginResponse>(
            "auth/login",
            data
        );
    }

    signup(data : SignupRequest) {
        return apiClient.post<SignupRequest>(
            "/auth/register",
            data
        );
    }

    logout(){
        return apiClient.post("/auth/logout");
    }

    profile(){
        return apiClient.get("/auth/me");
    }
}

export default new AuthService();