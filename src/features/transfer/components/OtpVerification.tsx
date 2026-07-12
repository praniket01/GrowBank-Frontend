"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import PinInput from "./PinInput";

import { useVerifyOtp } from "../hooks/useVerifyOtp";
import { useSendOtp } from "../hooks/useSendOtp";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

  const verifyOtpMutation = useVerifyOtp();
  const sendOtpMutation = useSendOtp();

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResendOtp = () => {
    sendOtpMutation.mutate(undefined,{
      onSuccess: () => {
        setTimeLeft(120);
        setOtp("");
      },
    });
  };


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mx-auto max-w-md rounded-xl border bg-card p-8 shadow">

      <div className="space-y-8">

        <div className="space-y-4 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <ShieldCheck
              className="text-primary"
              size={34}
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Verify OTP
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Enter the 6 digit OTP sent to your registered email address.
            </p>

          </div>

        </div>

        <PinInput
          value={otp}
          onChange={setOtp}
        />

        <div className="text-center">

          {timeLeft > 0 ? (
            <p className="text-sm text-muted-foreground">
              Resend OTP in{" "}
              <span className="font-semibold">
                {minutes}:{seconds.toString().padStart(2, "0")}
              </span>
            </p>
          ) : (
            <button
              onClick={handleResendOtp}
              disabled={sendOtpMutation.isPending}
              className="text-sm font-medium text-primary hover:underline"
            >
              {sendOtpMutation.isPending
                ? "Sending..."
                : "Resend OTP"}
            </button>
          )}

        </div>

        <Button
          className="w-full"
          disabled={
            otp.length !== 6 ||
            verifyOtpMutation.isPending
          }
          onClick={() =>
            verifyOtpMutation.mutate({
              otp,
            })
          }
        >
          {verifyOtpMutation.isPending
            ? "Verifying..."
            : "Verify OTP"}
        </Button>

      </div>

    </div>
  );
}