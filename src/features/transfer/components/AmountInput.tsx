"use client"
import FormInput from "@/shared/components/form/FormInput";

export default function AmountInput(){
    return(
        <FormInput 
        label="Amount"
        type="number"
        placeholder="Enter transfer amount..."
        />
    )
}