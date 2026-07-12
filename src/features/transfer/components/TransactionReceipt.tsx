"use client";

import { Button } from "@/components/ui/button";

import { useTransferStore } from "../store/transferStore";

export default function TransactionReceipt() {

  const {

    transaction,

    recipient,

    amount,

    resetTransfer

  } = useTransferStore();

  return (

    <div className="mx-auto max-w-md rounded-xl border bg-card p-8 shadow">

      <div className="space-y-8">

        <div className="text-center">

          <div className="text-6xl">

            ✅

          </div>

          <h2 className="mt-4 text-3xl font-bold">

            Transfer Successful

          </h2>

        </div>

        <div className="space-y-4 rounded-lg border p-5">

          <div className="flex justify-between">

            <span>Recipient</span>

            <span>

              {recipient?.name}

            </span>

          </div>

          <div className="flex justify-between">

            <span>Amount</span>

            <span>

              ₹{amount}

            </span>

          </div>

          <div className="flex justify-between">

            <span>Status</span>

            <span>

              {transaction?.status}

            </span>

          </div>

          <div className="flex justify-between">

            <span>Reference</span>

            <span>

              {transaction?._id}

            </span>

          </div>

        </div>

        <Button

          className="w-full"

          onClick={resetTransfer}

        >

          Back to Dashboard

        </Button>

      </div>

    </div>

  );

}