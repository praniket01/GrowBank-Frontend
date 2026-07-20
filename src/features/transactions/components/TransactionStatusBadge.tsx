import { Badge } from "@/components/ui/badge";
import { TransactionStatus } from "../types/transaction.types";

interface Props {
    status : TransactionStatus
}

export default function TransactionstatusBadge({
    status
} : Props) {
    switch(status){
        case "COMPLETED" : 
        return(
            <Badge
                    className="bg-green-100 text-green-700 hover:bg-green-100"
                >
                    Completed
                </Badge>
        );
        case "PENDING" : 
        return(
            <Badge
                     className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                >
                    Pending
                </Badge>
        );
        case "FAILED" : 
        return(
            <Badge
                    variant="destructive"
                    >
                    Failed
                </Badge>
        );
        default : null
    }
}