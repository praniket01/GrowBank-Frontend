import { useMutation, useQueryClient } from "@tanstack/react-query"
import transferService from "../api/transfer.service";
import { toast } from "sonner";
export const useTransfer = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : transferService.transfer,
        onSuccess : () => {
            toast.success("Transfer Successfull");

            queryClient.invalidateQueries({
                queryKey: ["balance"]
            });
            queryClient.invalidateQueries({
                queryKey : ["transactions"]
            })
        },
        onError : () => {
            toast.error(
                error?.response?.data?.message ?? "Tranfer failed"
            )
        }

    })
}