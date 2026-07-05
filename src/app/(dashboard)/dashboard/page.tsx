"use client"
import DashboardGrid from "@/features/dashboard/components/DashboardGrid";
import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useBalance } from "@/features/account/hooks/useBalance";

export default function DashboardPage(){
    const {data : user} = userCurrentUser();
    const { data : balance} = useBalance();

    console.log(user);
    console.log(balance);

    return <DashboardGrid />
}