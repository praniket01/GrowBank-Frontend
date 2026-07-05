"use client";

import FormCard from "@/shared/components/form/FormCard";
import AuthLogo from "./AuthLogo";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <FormCard
      title=""
      subtitle=""
    >
      <div className="space-y-6">

        <AuthLogo />

        <div className="space-y-2 text-center">

          <h1 className="text-2xl font-bold">
            {title}
          </h1>

          <p className="text-muted-foreground text-sm">
            {description}
          </p>

        </div>

        {children}

      </div>
    </FormCard>
  );
}