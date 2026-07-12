"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import PinInput from "./PinInput";
import { useVerifyPin } from "../hooks/useVerifyPin";

export default function TransactionPin() {

  const [pin, setPin] = useState("");

  const verifyPinMutation = useVerifyPin();

  

  return (

    <div className="mx-auto max-w-md space-y-8 rounded-xl border bg-card p-8 shadow">

      <div className="space-y-4 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">

          <ShieldCheck
            className="text-primary"
            size={34}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            Secure Transaction

          </h2>

          <p className="mt-2 text-sm text-muted-foreground">

            Verify your identity before
            processing this payment.

          </p>

        </div>

      </div>

      <PinInput
        value={pin}
        onChange={setPin}
      />

      <button
        className="mx-auto block text-sm text-primary hover:underline"
      >
        Forgot Transaction PIN?
      </button>

      <Button
        className="w-full"
        disabled={
          pin.length !== 6 ||
          verifyPinMutation.isPending
        }
        onClick={() =>{
          console.log("PIN is : ",pin)
          verifyPinMutation.mutate({
            pin,
          })
        }
        }
      >
        {verifyPinMutation.isPending
          ? "Verifying..."
          : "Verify PIN"}
      </Button>

    </div>

  );

}