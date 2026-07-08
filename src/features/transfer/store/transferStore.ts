import { create } from "zustand";
import { SearchUser } from "../types/user.types";

interface TransferStore {
    recipient : SearchUser | null;
    setRecipient : (user : SearchUser) => void;
    amount : number
    clearRecipient : () => void
    setAmount : (amount : number) => void
}


export const useTransferStore = create<TransferStore>((set) => ({
    recipient : null,
    amount : 0,
    setRecipient : (user) =>{
        set({
            recipient : user,
        })
    },
    clearRecipient : () => {
        set({
            recipient : null,
        })
    },
    setAmount : (amount) => {
        set({
            amount
        })
    },
}))