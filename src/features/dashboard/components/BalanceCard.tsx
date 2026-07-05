"use client";

import { CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BalanceCard() {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">
              Current Balance
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              ₹0.00
            </h1>

            <p className="mt-3 text-sm opacity-80">
              Savings Account
            </p>
          </div>

          <CreditCard size={50} className="opacity-80" />
        </div>
      </CardContent>
    </Card>
  );
}