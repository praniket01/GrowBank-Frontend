import { create } from "zustand";
import { SearchUser } from "../types/user.types";

interface TransferStore {
    recipient : SearchUser | null;
    setRecipient : (user : SearchUser) => void;
    clearRecipient : () => void
}


export const useTransferStore = create<TransferStore>((set) => ({
    recipient : null,
    setRecipient : (user) =>{
        set({
            recipient : user,
        })
    },
    clearRecipient : () => {
        set({
            recipient : null,
        })
    }
}))