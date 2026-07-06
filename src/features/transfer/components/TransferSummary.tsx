"use client"

import { Button } from "@/components/ui/button"

export default function TransferSummary(){
    return(
         <div className="rounded-lg border p-5 space-y-4">

      <h2 className="font-semibold text-lg">
        Transfer Summary
      </h2>

      <div className="flex justify-between">

        <span>Recipient</span>

        <span>-</span>

      </div>

      <div className="flex justify-between">

        <span>Amount</span>

        <span>₹0</span>

      </div>

      <Button className="w-full">

        Continue

      </Button>

    </div>
    )
}