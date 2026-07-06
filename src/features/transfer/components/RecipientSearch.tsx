"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import FormInput from "@/shared/components/form/FormInput";
import { useSearchUsers } from "../hooks/useSearchUsers";
import RecipientCard from "./RecipientCard";

export default function RecipientSearch() {

  const [search, setSearch] = useState("");

  const [debouncedSearch] =
    useDebounce(search, 300);

  const {
    data: users,
    isLoading,
  } = useSearchUsers(debouncedSearch);

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