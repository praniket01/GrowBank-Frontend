import Sidebar from './Sidebar'
import React from 'react'
import DashboardHeader from './DashboardHeader'

interface DashboardShellProps{
    children: React.ReactNode
}

const DashboardShell = ({
    children,
}: DashboardShellProps) => {
  return (
    <div className='flex h-screen bg-slate-50'>
        <Sidebar />
        
        <div className='flex flex-1 flex-col overflow-hidden'>
            <DashboardHeader />

            <main className='flex-1 overflow-y-auto p-6'>
                {children}
            </main>
        </div>

    </div>
  )
}

export default DashboardShell