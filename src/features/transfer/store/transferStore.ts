import { create } from "zustand";
import { SearchUser } from "../types/user.types";

type TransferStep = | "FORM" | "REVIEW" | "PIN" | "OTP" | "PROCESSING" | "SUCCESS" ;

export interface TransactionReceipt {
  _id: string;
  amount: number;
  fromAccount: string;
  toAccount: string;
  status: string;
  createdAt: string;
  idempotencyKey: string;
}

interface TransferStore {
    recipient : SearchUser | null;
    setRecipient : (user : SearchUser) => void;
    amount : number
    clearRecipient : () => void
    setAmount : (amount : number) => void
    step : TransferStep
    resetTransfer : () => void
    setStep : (step : TransferStep) => void
    transaction : TransactionReceipt | null
    setTransaction : (
        transaction : TransactionReceipt
    ) => void
}

export const useTransferStore = create<TransferStore>((set) => ({
    recipient : null,
    amount : 0,
    step : "FORM",
    setStep : (step) => set({
        step
    }),
    transaction : null,
    setTransaction: (transaction) => set({transaction}),
    setRecipient : (user) =>{
        set({
            recipient : user,
        })
    },
    clearRecipient : () => {
        set({
            recipient : null,
            amount : 0
        })
    },
    resetTransfer: () =>
    set({
        recipient: null,
        amount: 0,
        transaction : null,
        step: "FORM",
    }),
    setAmount : (amount) => {
        set({
            amount
        })
    },
}))