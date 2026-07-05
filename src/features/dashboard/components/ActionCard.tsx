"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ActionCard({
  title,
  description,
  href,
  icon: Icon,
}: ActionCardProps) {
  return (
    <Link href={href}>
      <Card className="transition hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <CardContent className="flex flex-col items-center gap-3 p-6">
          <Icon className="text-blue-600" size={34} />

          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="text-center text-sm text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}