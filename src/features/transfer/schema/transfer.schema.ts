import { z } from "zod";

export const transferSchema = z.object({
    recipientId : z
    .string()
    .min(1,"Please select a recipient"),
    amount : z.coerce
    .number({
        error : "Amount is required"
    })
    .positive("Amoount should be greater than 0")
    .min(1,"Minimum transer amount is Re. 1")

});

export type TransferFormData= z.infer<typeof transferSchema>;