"use client";

import { Hand } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WelcomeCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <Hand className="text-yellow-500" />

          <div>
            <h2 className="text-2xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-muted-foreground">
              Manage your accounts and transfers securely with GrowBank.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}