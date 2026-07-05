"use client";

import { useQuery } from "@tanstack/react-query";
import accountService from "../api/account.service";

export const useBalance = () => {
  return useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const response = await accountService.getBalance();
      return response.data.balance;
    },
  });
};