import React from 'react'
import { Transaction } from '../types/transaction.types'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { format } from "date-fns";
import TransactionStatusBadge from './TransactionStatusBadge';
import { userCurrentUser } from '@/features/auth/hooks/useCurrentUser';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
    transaction: Transaction,
    onClick?: () => void
}

const TransactionCard = ({
    transaction, onClick
}: Props) => {

    const user = userCurrentUser();

    const isDebit = transaction.fromAccount.user._id === user.data._id;

    const Icon = isDebit ? ArrowUpRight : ArrowDownRight

    const queryClient =  useQueryClient();

    return (
        <Card
            onClick={onClick}
            className="cursor-pointer p-5 transition hover:shadow-md"
        >
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <div
                        className={`
                        flex h-12 w-12 items-center justify-center rounded-full
                        ${isDebit
                                ? "bg-red-100"
                                : "bg-green-100"
                            }
                    `}
                    >
                        <Icon
                            className={
                                isDebit
                                    ? "text-red-600"
                                    : "text-green-600"
                            }
                        />
                    </div>
                    <div>

                        <h3 className="font-semibold">

                            {isDebit
                                ? `Sent to ${transaction.fromAccount.user.name}`
                                : `Received from ${transaction.toAccount.user.name}`}

                        </h3>

                        <p className="text-sm text-muted-foreground">

                            {transaction.fromAccount.email}

                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">

                            {format(
                                new Date(transaction.createdAt),
                                "dd MMM yyyy • hh:mm a"
                            )}

                        </p>

                    </div>
                </div>

                <div className="text-right">

                    <p
                        className={`text-lg font-bold ${isDebit
                            ? "text-red-600"
                            : "text-green-600"
                            }`}
                    >

                        {isDebit ? "-" : "+"}₹
                        {transaction.amount.toLocaleString()}

                    </p>

                    <div className="mt-2">

                        <TransactionStatusBadge
                            status={transaction.status}
                        />

                    </div>

                </div>

            </div>
        </Card>
    )
}

export default TransactionCard