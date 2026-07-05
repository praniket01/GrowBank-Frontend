import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth.store"
import authService from "../api/auth.service";
import { authStorage } from "../utils/auth.storage";
import { error } from "console";
import { toast } from "sonner";

export const useLogin = () => {
    const login = useAuthStore((state) => state.login);
    return useMutation({
        mutationFn : authService.login,
        onSuccess : (data) => {
            authStorage.setToken(data.data.token);
            login(data.data.user, data.data.token)
        },
        onError : (error: any) => {
            toast.error(
                error?.response.data?.message ??
                "Unable to login."
            )
        }
    })
}