"use client";

import { Card, CardContent } from "@/components/ui/card";

import RecipientSearch from "./RecipientSearch";
import TransferSummary from "./TransferSummary";
import AmountInput from "./AmountInput";
import { useTransferStore } from "../store/transferStore";
import ReviewTransfer from "./ReviewTransfer";
import TransactionPin from "./TransactionPin";
import ProcessingScreen from "./ProcessingScreen";
import TransactionReceipt from "./TransactionReceipt";
import OtpVerification from "./OtpVerification";

export default function TransferForm() {

  const step = useTransferStore(state => state.step);
  if(step === "REVIEW") return <ReviewTransfer />
  
  if(step === "PIN") return <TransactionPin />

  if(step === "OTP") return <OtpVerification />

  if(step === "PROCESSING") return <ProcessingScreen />

  if(step === "SUCCESS") return <TransactionReceipt />
  
  return (
    <Card>

      <CardContent className="space-y-6 p-6">

        <div>

          <h1 className="text-3xl font-bold">
            Transfer Money
          </h1>

          <p className="text-muted-foreground mt-1">
            Send money securely to another GrowBank user.
          </p>

        </div>

        <RecipientSearch />

        <AmountInput />

        <TransferSummary />

      </CardContent>

    </Card>
  );
}