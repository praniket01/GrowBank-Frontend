"use client"

import { useProfile } from "@/features/auth/hooks/useProfile";
import { useAuthStore } from "@/features/auth/store/auth.store"
import { stat } from "fs";
import { useEffect } from "react";

interface Props {
    children : React.ReactNode
}

export default function AuthProvider({ children } : Props) {
    const token = useAuthStore((state) => state.token);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);
    const setLoading = useAuthStore((state) => state.setLoading);

    const {data,isLoading,isError} = useProfile({
        enabled : !!token,
    });

    useEffect(() => {
        setLoading(isLoading);
        if(!token) return;
        if(data) { login(data.data.user, data.data.token)}
        if(isError){
            logout();
        }

    },[data, isLoading, isError]);

    return children;
}