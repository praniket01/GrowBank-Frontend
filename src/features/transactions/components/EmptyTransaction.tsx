import { ReceiptText } from 'lucide-react'
import React from 'react'

const EmptyTransaction = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">

            <ReceiptText
                className="mb-4 h-14 w-14 text-muted-foreground"
            />

            <h2 className="text-lg font-semibold">

                No Transactions Yet

            </h2>

            <p className="mt-2 text-center text-sm text-muted-foreground">

                Your transfer history will appear here once you
                start sending or receiving money.

            </p>

        </div>
    )
}

export default EmptyTransaction