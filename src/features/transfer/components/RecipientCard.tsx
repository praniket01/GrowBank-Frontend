"use client";

import { UserCircle2 } from "lucide-react";
import { SearchUser } from "../types/user.types";
import { useTransferStore } from "../store/transferStore";

interface RecipientCardProps {
  user: SearchUser;
}

export default function RecipientCard({
  user,
}: RecipientCardProps) {

    const setRecipient = useTransferStore((state) => state.setRecipient)

  return (
    <button
      type="button"
      onClick={() => setRecipient(user)}
      className="
        w-full
        rounded-lg
        border
        p-4
        text-left
        transition
        hover:border-blue-500
        hover:bg-blue-50
      "
    >
      <div className="flex items-center gap-3">

        <UserCircle2 size={40} />

        <div>

          <p className="font-semibold">
            {user.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {user.email}
          </p>

        </div>

      </div>
    </button>
  );
}