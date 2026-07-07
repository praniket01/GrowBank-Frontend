"use client"

import { Button } from "@/components/ui/button"
import { useTransferStore } from "../store/transferStore"

export default function TransferSummary(){

  const recipient = useTransferStore((state) => {
      state.recipient
  })

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

        <span>Amount</span>

        <span>₹0</span>

      </div>

      <Button className="w-full"
      disabled={!recipient}
      >

        Continue

      </Button>

    </div>
    )
}