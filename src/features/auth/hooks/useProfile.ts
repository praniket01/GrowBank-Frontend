import { useQuery } from "@tanstack/react-query"
import authService from "../api/auth.service"

interface Props{
    enabled?: boolean,
}

export const useProfile = ({
    enabled = true,
} : Props = {} ) => {
    return useQuery({
        queryKey : ["current-user"],
        queryFn : authService.profile,
        retry : false,
        staleTime : 1000 * 60 * 5
    })
}