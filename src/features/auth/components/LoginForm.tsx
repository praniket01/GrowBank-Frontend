"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "./AuthCard";
import AuthRedirect from "./AuthRedirect";

import FormInput from "@/shared/components/form/FormInput";
import FormPassword from "@/shared/components/form/FormPassword";
import LoadingButton from "@/shared/components/form/LoadingButton";

import { loginSchema, LoginForm as LoginFormValues,signinSchema, SigninForm } from "../schema/login.schema";
import { useLogin } from "../hooks/useLogin";

import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const loginMutation = useLogin();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (values: SigninForm) => {
    loginMutation.mutate(values,{
      onSuccess: () => {
        router.replace(ROUTES.DASHBOARD);
      }
    });
  };

  return (
    <AuthCard
      title="Welcome Back"
      description="Sign in to continue to GrowBank"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormInput
          label="Email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormPassword
          label="Password"
          error={errors.password?.message}
          {...register("password")}
        />

        <LoadingButton
          type="submit"
          className="w-full"
          isLoading={loginMutation.isPending}
        >
          Sign In
        </LoadingButton>
      </form>

      <AuthRedirect
        label="Don't have an account?"
        href={ROUTES.SIGN_UP}
        linkText="Create one"
      />
    </AuthCard>
  );
}