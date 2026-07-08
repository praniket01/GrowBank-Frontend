"use client"
import FormInput from "@/shared/components/form/FormInput";
import { useTransferStore } from "../store/transferStore";

export default function AmountInput(){
    const amount = useTransferStore((state) => state.amount);

    const setAmount = useTransferStore((state) => state.setAmount)
    return(
        <div className="space-y-2">
            <label>
                Amount : 
            </label>
            <input 
            type="number"
            value={amount === 0 ? "" : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter Amount"
            />
        </div>
    )
}