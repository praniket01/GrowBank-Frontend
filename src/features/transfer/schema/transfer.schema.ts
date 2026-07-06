import { z } from "zod";

export const transferSchema = z.object({
    recipientId : z
    .string()
    .min(1,"Please select a recipient"),
    amount : z
    .number({
        error : "Amount is required"
    })
    .positive("Amoount should be greater than 0")

});

export type TransferFormData= z.infer<typeof transferSchema>;