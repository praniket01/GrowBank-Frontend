"use client";

import Link from "next/link";

interface AuthRedirectProps {
  label: string;
  href: string;
  linkText: string;
}

export default function AuthRedirect({
  label,
  href,
  linkText,
}: AuthRedirectProps) {
  return (
    <p className="text-center text-sm text-muted-foreground">
      {label}{" "}
      <Link
        href={href}
        className="font-semibold text-emerald-600 hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
}
