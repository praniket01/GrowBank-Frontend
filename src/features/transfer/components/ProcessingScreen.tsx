"use client";

import { CheckCircle2 } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { useTransferStore } from "../store/transferStore";

const steps = [
  "Identity Verified",
  "OTP Verified",
  "Updating Ledger",
  "Generating Receipt",
];

export default function ProcessingScreen() {

  const [currentStep, setCurrentStep] =
    useState(0);

  const setStep =
    useTransferStore(state => state.setStep);

  useEffect(() => {

    if (currentStep === steps.length) {

      setTimeout(() => {

        setStep("SUCCESS");

      }, 500);

      return;

    }

    const timer = setTimeout(() => {

      setCurrentStep(prev => prev + 1);

    }, 700);

    return () => clearTimeout(timer);

  }, [currentStep, setStep]);

  return (

    <div className="mx-auto max-w-md rounded-xl border bg-card p-8 shadow">

      <div className="space-y-8">

        <div className="space-y-2 text-center">

          <div className="text-5xl">

            🔒

          </div>

          <h2 className="text-2xl font-bold">

            Secure Transaction

          </h2>

          <p className="text-muted-foreground">

            Processing your transfer...

          </p>

        </div>

        <div className="space-y-4">

          {steps.map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-3"
            >

              {index < currentStep ? (

                <CheckCircle2
                  className="text-green-600"
                />

              ) : index === currentStep ? (

                <Loader2
                  className="animate-spin"
                />

              ) : (

                <div className="h-6 w-6 rounded-full border" />

              )}

              <span>

                {step}

              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}