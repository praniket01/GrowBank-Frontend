"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    SetPinForm,
    setPinSchema,
} from "../schema/setPin.schema";

import PinInput from "@/features/transfer/components/PinInput";
import { Button } from "@/components/ui/button";
import { useSetPin } from "../hooks/useSetPin";

export default function SetupTransactionPin() {

    const mutation = useSetPin();

    const {

        handleSubmit,

        setValue,

        watch,

        formState: { errors },

    } = useForm<SetPinForm>({
        resolver: zodResolver(setPinSchema),
        defaultValues: {
            pin: "",
            confirmPin: "",
        },
    });

    const pin = watch("pin");
    const confirmPin = watch("confirmPin");

    const onSubmit = (values: SetPinForm) => {

        mutation.mutate(values);

    };

    return (

        <div className="mx-auto max-w-md rounded-xl border bg-card p-8 shadow">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
            >

                <div className="text-center">

                    <h1 className="text-3xl font-bold">

                        Setup Transaction PIN

                    </h1>

                    <p className="mt-2 text-muted-foreground">

                        Create a secure 6-digit PIN to authorize all future transfers.

                    </p>

                </div>

                <div className="space-y-6">

                    <div>

                        <label className="mb-2 block">

                            Transaction PIN

                        </label>

                        <PinInput
                            value={pin}
                            onChange={(value) =>
                                setValue("pin", value)
                            }
                        />

                        {errors.pin && (

                            <p className="mt-2 text-sm text-red-500">

                                {errors.pin.message}

                            </p>

                        )}

                    </div>

                    <div>

                        <label className="mb-2 block">

                            Confirm PIN

                        </label>

                        <PinInput
                            value={confirmPin}
                            onChange={(value) =>
                                setValue("confirmPin", value)
                            }
                        />

                        {errors.confirmPin && (

                            <p className="mt-2 text-sm text-red-500">

                                {errors.confirmPin.message}

                            </p>

                        )}

                    </div>

                </div>

                <Button
                    className="w-full"
                    disabled={mutation.isPending}
                >

                    {
                        mutation.isPending
                            ? "Saving..."
                            : "Save Transaction PIN"
                    }

                </Button>

            </form>

        </div>

    );

}