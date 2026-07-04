export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: "Welcome back!",
  LOGIN_FAILED: "Invalid email or password.",
  SIGNUP_SUCCESS: "Account created successfully.",
  SESSION_EXPIRED: "Your session has expired. Please sign in again.",
} as const;

export const AUTH_QUERY_KEYS = {
  PROFILE: ["auth", "profile"] as const,
} as const;