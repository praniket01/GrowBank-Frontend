"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthCard from "./AuthCard";
import AuthRedirect from "./AuthRedirect";
import FormInput from "@/shared/components/form/FormInput";
import FormPassword from "@/shared/components/form/FormPassword";
import LoadingButton from "@/shared/components/form/LoadingButton";
import { signupForm, signupSchema } from "../schema/signup.schema";
import { useSignup } from "../hooks/useSignup";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";
import { loginSchema } from "../schema/login.schema";


export default function SignupForm() {
  console.log("Signup form Rendered")
  const signupMutation = useSignup();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupForm>({
        resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: signupForm) => {
    console.log("Form Submitted");
    console.log(values);
    signupMutation.mutate(values, {
      onSuccess: () => {
        router.replace(ROUTES.SIGN_IN);
      }
    });
  };

  return (
    <AuthCard
      title="Create Account"
      description="Open your GrowBank account"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormInput
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormInput
          label="Name"
          type="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <FormPassword
          label="Password"
          error={errors.password?.message}
          {...register("password")}
        />

        <LoadingButton
          type="submit"
          className="w-full"
          isLoading={signupMutation.isPending}
        >
          Create Account
        </LoadingButton>
      </form>

      <AuthRedirect
        label="Already have an account?"
        href={ROUTES.SIGN_IN}
        linkText="Sign In"
      />
    </AuthCard>
  );
}