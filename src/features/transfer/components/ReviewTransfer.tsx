import { Button } from "@/components/ui/button";
import { useTransferStore } from "../store/transferStore";
import { userCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useInitiateTransfer } from "../hooks/useInititateTransfer";
import { v4 as uuidv4 } from "uuid";

export default function ReviewTransfer() {
    const recipient = useTransferStore(state => state.recipient);
    const amount = useTransferStore(state => state.amount);
    const setStep = useTransferStore(state => state.setStep);
    const { data: currentUser } = userCurrentUser();

    const initiateTransfer = useInitiateTransfer();
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold">
                    Review Transfer
                </h2>
                <p className="text-muted-foreground">
                    Please verify the details before proceeding
                </p>

            </div>
            <div className="rounded-lg border p-6 space-y-4">
                <div className="flex justify-between">
                    <span>
                        Recipient :
                    </span>
                    <span>
                        {recipient?.name}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>
                        Email :
                    </span>
                    <span>
                        {recipient?.email}
                    </span>

                </div>
                <div className="flex justify-between">
                    <span>Amount : </span>
                    <span>₹ {amount}</span>
                </div>
                <div className="flex justify-between">
                    <span>Transfer Fee : </span>
                    <span>₹ 0</span>
                </div>

                <div className="flex gap-4">

                    <Button
                        variant="outline"
                        onClick={() => setStep("FORM")}
                    >
                        Back
                    </Button>

                    <Button
                        className="flex-1"
                        disabled={initiateTransfer.isPending}
                        onClick={() => {
                                if(!recipient || !currentUser){
                                    return;
                                }
                                initiateTransfer.mutate({
                                    fromAccount : currentUser._id,
                                    toAccount : recipient._id,
                                    amount,
                                    idempotencyKey : uuidv4(),
                                })
                        }}
                    >   
                            {initiateTransfer.isPending ? "Preparing..." : "Proceed Securely"}
                    </Button>

                </div>
            </div>
        </div>
    )
}