"use client";

import Link from "next/link";
import { Landmark } from "lucide-react";

export default function AuthLogo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-2"
    >
      <Landmark className="h-8 w-8 text-emerald-600" />

      <span className="text-2xl font-bold tracking-tight">
        GrowBank
      </span>
    </Link>
  );
}