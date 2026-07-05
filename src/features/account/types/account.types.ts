export interface BalanceResponse {
  success: boolean;
  data: {
    balance: number;
    totalCredits: number;
    totalDebits: number;
  };
}