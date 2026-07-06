import { useQuery } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useSearchUsers(query : string){
    return useQuery({
        queryKey : ["search-users",query],
        enabled : query.trim().length >= 2,
        queryFn : async () => {
            const response = 
            await transferService.SearchUsers(query);
            return response.data.users;
        }
    })
}