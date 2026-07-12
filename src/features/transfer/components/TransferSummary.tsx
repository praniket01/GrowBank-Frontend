"use client"

import { Button } from "@/components/ui/button"
import { useTransferStore } from "../store/transferStore"
import { useTransfer } from "../hooks/useTransfer";
import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { generateIdempotencyKey } from "../utils/generateIdempotencyKey";

export default function TransferSummary(){

  const recipient = useTransferStore((state) =>state.recipient)

  const amount = useTransferStore((state) =>state.amount);
  
  const setStep = useTransferStore((state) => state.setStep);

  return(
         <div className="rounded-lg border p-5 space-y-4">

      <h2 className="font-semibold text-lg">
        Transfer Summary
      </h2>

      <div className="flex justify-between">

        <span>{recipient?.name ?? "-"}</span>

        <span>-</span>

      </div>

      <div className="flex justify-between">

        <span>Amount : </span>

        <span>₹ {amount.toLocaleString("en-IN")}</span>

      </div>

      <Button className="w-full"
      disabled={!recipient || amount <= 0 }
      onClick={() => {
        setStep("REVIEW")
      }}
      >
        Continue
      </Button>

    </div>
    )
}