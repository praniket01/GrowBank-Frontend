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

export interface InitiateTransferRequest {
  fromAccount: string;
  toAccount: string;
  amount: number;
  idempotencyKey: string;
}

export interface InitiateTransferResponse {
  success: boolean;
  transferId: string;
  message: string;
}