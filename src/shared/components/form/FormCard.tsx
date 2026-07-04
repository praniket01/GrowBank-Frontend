"use client"

import { Card, CardContent } from "@/components/ui/card"

interface FormCardProps {
    title : string,
    subtitle?: string,
    children : React.ReactNode
}

export default function FormCard({
    title,
    subtitle,
    children
} : FormCardProps){
    return(
        <Card className="w-full max-w-md shadow-lg">
      <CardContent className="space-y-6 p-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">
            {title}
          </h1>

          {subtitle && (
            <p className="text-muted-foreground text-sm">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </CardContent>
    </Card>
    )
}