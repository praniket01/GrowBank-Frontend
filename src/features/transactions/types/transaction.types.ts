export interface counterParty {
    _id : string,
    name : string,
    email : string
}

export type TransactionType = | "DEBIT" | "CREDIT";

export type TransactionStatus = | "PENDING" | "COMPLETED" | "FAILED"

export interface Transaction{
    id : string,
    amount : number,
    status : TransactionStatus,
    type : TransactionType,
    createdAt : string,
    counterparty : counterParty
}

export interface TransactionHistoryResponse {
    transactions : Transaction,
    pagination : {
        page : number,
        limit :number,
        total : number,
        totalPages : number
    }
}