"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import FormInput from "@/shared/components/form/FormInput";
import { useSearchUsers } from "../hooks/useSearchUsers";
import RecipientCard from "./RecipientCard";
import { useTransferStore } from "../store/transferStore";

export default function RecipientSearch() {

    const recipient = useTransferStore(
        (state) => state.recipient
    );

    const clearRecipient = useTransferStore(
        (state) => state.clearRecipient
    );

  const [search, setSearch] = useState("");

  const [debouncedSearch] =
    useDebounce(search, 300);

  const {
    data: users,
    isLoading,
  } = useSearchUsers(debouncedSearch);

  if(recipient){
    return(
        <div className="rounded-lg border bg-green-50 p-4">
            <p className="text-sm text-muted-foreground">
                Recipient
            </p>
            <h3 className="mt-1 text-lg font-semibold">
                {recipient.name}
            </h3>
            <p className="text-sm text-muted-foreground">
                {recipient.email}
            </p>
            <button className="mt-3 text-sm text-blue-600
            "
            onClick={clearRecipient}>
                Change Recipient
            </button>
        </div>
    )
  }

  return (
    <div className="space-y-4">

      <FormInput
        label="Recipient"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search by name or email"
      />

      {isLoading && (
        <p className="text-sm text-muted-foreground">
          Searching...
        </p>
      )}

      <div className="space-y-3">

        {users?.map((user) => (
          <RecipientCard
            key={user._id}
            user={user}
          />
        ))}

      </div>

    </div>
  );
}