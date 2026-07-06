"use client";

import { Card, CardContent } from "@/components/ui/card";

import RecipientSearch from "./RecipientSearch";
import TransferSummary from "./TransferSummary";
import AmountInput from "./AmountInput";

export default function TransferForm() {
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