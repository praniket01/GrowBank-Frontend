import React from 'react'
import DashboardShell from '@/features/dashboard/components/DashboardShell'
import { AuthGuard } from '@/shared/components/auth/AuthGuard'

export default function DashboardLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <AuthGuard >
            <DashboardShell>
                {children}
            </DashboardShell>
        // </AuthGuard>
    )
}