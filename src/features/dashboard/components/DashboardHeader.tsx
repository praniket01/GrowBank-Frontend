"use client";

import SearchBar from "./SearchBar";
import NotificationBell from "./NotificationBell";
import UserDropdown from "./UserDropdown";
export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
    
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <SearchBar />

        <NotificationBell />

        <UserDropdown />
      </div>
    </header>
  );
}