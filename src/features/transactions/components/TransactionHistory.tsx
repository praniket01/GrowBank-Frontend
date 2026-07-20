"use client";

import EmptyTransaction from "./EmptyTransaction";
import TransactionCard from "./TransactionCard";

import { useTransactionHistory } from "../hooks/useTransferHistory";


export default function TransactionHistory() {

    const {

        data,

        isLoading,

    } = useTransactionHistory();

    if (isLoading) {

        return <p>Loading transactions...</p>;

    }

    if (
        !data ||
        data.transactions.length === 0
    ) {

        return <EmptyTransaction />;

    }
    return (

        <div className="space-y-4">

            {data.transactions.map((transaction:any) => (

                <TransactionCard
                    key={transaction._id}
                    transaction={transaction}
                />

            ))}
    
        </div>

    );

}