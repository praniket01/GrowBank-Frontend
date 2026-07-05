"use client";

import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";

export default function WelcomeCard() {
  const { data: user, isLoading } = userCurrentUser();

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-card p-6 animate-pulse h-36" />
    );
  }

  return (
    <div className="rounded-xl border bg-card p-6">
      <p className="text-muted-foreground text-sm">
        Welcome Back
      </p>

      <h1 className="mt-2 text-3xl font-bold">
        {user?.name} 👋
      </h1>

      <p className="mt-2 text-muted-foreground">
        Here's an overview of your GrowBank account.
      </p>
    </div>
  );
}