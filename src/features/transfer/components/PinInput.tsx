"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PinInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
}

export default function PinInput({
  value,
  onChange,
  length = 6,
}: PinInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const digits = e.target.value
      .replace(/\D/g, "")
      .slice(0, length);

    onChange(digits);
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="cursor-text"
    >
      <input
        ref={inputRef}
        type="password"
        inputMode="numeric"
        autoComplete="one-time-code"
        value={value}
        onChange={handleChange}
        className="absolute opacity-0 pointer-events-none"
      />

      <div className="flex justify-center gap-3">

        {Array.from({ length }).map((_, index) => {

          const digit = value[index];

          return (

            <div
              key={index}
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-xl border-2 text-xl font-bold transition-all",
                digit
                  ? "border-primary"
                  : "border-gray-300"
              )}
            >
              {digit ? "•" : ""}
            </div>

          );

        })}

      </div>
    </div>
  );
}