"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormPassword = React.forwardRef<HTMLInputElement, FormPasswordProps>(
  ({ label, error, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {label}
        </label>

        <div className="relative">
          <Input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(
              "pr-10",
              error && "border-red-500",
              className
            )}
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormPassword.displayName = "FormPassword";

export default FormPassword;