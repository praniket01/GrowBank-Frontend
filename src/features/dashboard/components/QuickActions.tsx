"use client";

import { ArrowRightLeft, ReceiptText, User } from "lucide-react";

import ActionCard from "./ActionCard";
import { ROUTES } from "@/shared/constants/routes";

export default function QuickActions() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">
        Quick Actions
      </h2>
x 
      <div className="grid gap-6 md:grid-cols-3">
        <ActionCard
          title="Transfer Money"
          description="Send money securely to another account."
          href={ROUTES.TRANSFER}
          icon={ArrowRightLeft}
        />

        <ActionCard
          title="Transactions"
          description="View your complete transaction history."
          href={ROUTES.TRANSACTIONS}
          icon={ReceiptText}
        />

        <ActionCard
          title="Profile"
          description="Manage your account information."
          href={ROUTES.PROFILE}
          icon={User}
        />
      </div>
    </div>
  );
}