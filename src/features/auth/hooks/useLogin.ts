import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth.store"
import authService from "../api/auth.service";
import { authStorage } from "../utils/auth.storage";

const useLogin = () => {
    const login = useAuthStore((state) => state.login);
    return useMutation({
        mutationFn : authService.login,
        onSuccess : (data) => {
            authStorage.setToken(data.data.token);
            login(data.data.user, data.data.token)
        }
    })
}