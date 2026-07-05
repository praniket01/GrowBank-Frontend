"use client";

import { IndianRupee } from "lucide-react";
import { useBalance } from "@/features/account/hooks/useBalance";

export default function BalanceCard() {
  const { data, isLoading } = useBalance();

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-card p-6 animate-pulse h-44" />
    );
  }

  return (
    <div className="rounded-xl border bg-card p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-muted-foreground text-sm">
            Current Balance
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            ₹ {data.toLocaleString("en-IN")}
          </h2>
        </div>

        {/* <IndianRupee className="h-10 w-10 text-primary" /> */}

      </div>

    </div>
  );
}