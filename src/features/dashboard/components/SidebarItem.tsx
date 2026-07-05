"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  item: {
    title: string;
    href?: string;
    icon: LucideIcon;
  };
  isLogout?: boolean;
  onLogout?: () => void;
}

export default function SidebarItem({
  item,
  isLogout = false,
  onLogout,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    !isLogout && item.href === pathname;

  const Icon = item.icon;

  const className = cn(
    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
    isActive
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-600 hover:bg-slate-100 hover:text-blue-600",
    isLogout &&
      "text-red-500 hover:bg-red-50 hover:text-red-600"
  );

  if (isLogout) {
    return (
      <button
        type="button"
        onClick={onLogout}
        className={cn(className, "w-full")}
      >
        <Icon size={20} />

        <span>{item.title}</span>
      </button>
    );
  }

  return (
    <Link
      href={item.href!}
      className={className}
    >
      <Icon size={20} />

      <span>{item.title}</span>
    </Link>
  );
}