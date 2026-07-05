"use client";

import { ChevronDown, CircleUserRound } from "lucide-react";

export default function UserDropdown() {
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
          User
        </p>

        <p className="text-xs text-slate-500">
          Customer
        </p>
      </div>

      <ChevronDown size={18} />
    </button>
  );
}