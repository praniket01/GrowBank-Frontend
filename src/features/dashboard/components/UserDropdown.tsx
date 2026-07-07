"use client";

import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { ChevronDown, CircleUserRound } from "lucide-react";

export default function UserDropdown() {
  const { data: user } = userCurrentUser();
  

  return (
    <button
      className="
      flex
      items-center
      gap-2
      rounded-lg
      px-2
      py-1
      hover:bg-slate-100
      transition
      "
    >
      <CircleUserRound size={34} />

      <div className="hidden md:block text-left">
        <p className="font-semibold">
          {user?.name}
        </p>

        <p className="text-xs text-slate-500">
          Customer
        </p>
      </div>

      <ChevronDown size={18} />
    </button>
  );
}