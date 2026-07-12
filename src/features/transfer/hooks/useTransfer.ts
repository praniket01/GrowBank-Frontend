import { useMutation, useQueryClient } from "@tanstack/react-query"
import transferService from "../api/transfer.service";
import { toast } from "sonner";
import { useTransferStore } from "../store/transferStore";
export const useTransfer = () => {
    const queryClient = useQueryClient();
    const resetTransfer = useTransferStore((state) =>
    state.clearRecipient);
    const resetAmount = useTransferStore((state) =>
    state.amount =0);

    return useMutation({
        mutationFn : transferService.transfer,
        onSuccess : () => {
            resetTransfer();
            resetAmount();
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