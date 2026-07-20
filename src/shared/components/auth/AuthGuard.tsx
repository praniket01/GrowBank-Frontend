"use client"
import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { data: user, isLoading, isError } = userCurrentUser();

    const token = typeof window !== "undefined" ? localStorage.getItem("growbank-auth") : null;

    useEffect(() => {
        if (!token) {
            router.replace('/signin');
            return;
        }
        if (!isLoading && isError) {
            localStorage.removeItem("token");
            router.replace('/signin');
        }
    }, [token, isError, isLoading, router]);

    if (isLoading) {
        return (
            <p>
                Loading...
            </p>
        )
    }

    if (!user) return null;

    return children;

}