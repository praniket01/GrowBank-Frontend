import { z } from 'zod';

export const setPinSchema = z.object({
    pin : z.string(),

    confirmPin : z.string(),
}).refine((data) => data.pin === data.confirmPin, {
    message : "PINs do not match",
    path : ["confirmPin"],
});

export type SetPinForm = z.infer<typeof setPinSchema>;