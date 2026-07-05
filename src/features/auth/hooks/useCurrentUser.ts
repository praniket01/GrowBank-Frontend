"use client"

import { useQuery } from "@tanstack/react-query"
import authService from "../api/auth.service"

export const userCurrentUser = () => {
    return useQuery({
        queryKey : ["current-user"],
        queryFn : async () => {
            const response = await authService.profile();
            return response.data.user;
        }
    })
}