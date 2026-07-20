import { useQuery, useQueryClient } from "@tanstack/react-query"
import transferService from "../api/transfer.service"

export const useTransactionHistory = (
      page = 1,
    limit = 10
) => {
    return useQuery({
        queryKey : ["transaction-History",page,limit],
        queryFn : async () => {
            const response = await transferService.getHistory(page,limit);
            return response.data.data;
        }
    });
}