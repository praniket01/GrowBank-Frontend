export interface TransferRequest {
    fromAccount : string,
    toAccount : string,
    amount : number,
    idempotencyKey : string
}

export interface TransferResponse {
    success : boolean,
    message : string
}