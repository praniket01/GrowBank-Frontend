"use client"
import { apiClient } from "@/lib/axios";
import { BalanceResponse } from "../types/account.types";

class AccountService {
    getBalance() {
        return apiClient.post<BalanceResponse>(
            "/account/balance"
        )
    }
}

export default new AccountService();