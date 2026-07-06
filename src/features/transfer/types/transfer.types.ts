export interface TransferRequest {
    recipientId : string,
    amount : number,
}

export interface TransferResponse {
    success : boolean,
    message : string
}