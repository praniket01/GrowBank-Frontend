import BalanceCard from "./BalanceCard";
import QuickActions from "./QuickActions";
import WelcomeCard from "./WelcomeCard";

export default function DashboardGrid(){
    return(
        <div className="space-y-6">
            
        <WelcomeCard />
        <BalanceCard />
        <QuickActions />
        </div>
    )
}