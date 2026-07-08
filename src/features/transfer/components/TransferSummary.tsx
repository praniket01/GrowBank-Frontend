"use client"

import { Button } from "@/components/ui/button"
import { useTransferStore } from "../store/transferStore"
import { useTransfer } from "../hooks/useTransfer";
import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { generateIdempotencyKey } from "../utils/generateIdempotencyKey";

export default function TransferSummary(){

  const recipient = useTransferStore((state) =>state.recipient)

  const amount = useTransferStore((state) =>state.amount);
  
  const {data : user} = userCurrentUser();
  const transfer = useTransfer();

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
      disabled={!recipient || amount <= 0 || transfer.isPending}
      onClick={ () => {
          if(!user || !recipient) return;
          transfer.mutate({
            fromAccount : user._id,
            toAccount : recipient._id,
            amount,
            idempotencyKey : generateIdempotencyKey()
          });
      }}
      >
        {transfer.isPending ? "Transferring" : "Continue"}
      </Button>

    </div>
    )
}