const ACCESS_TOKEN_KEY = "growbank_access_token";

export const tokenStorage = {
  getToken: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  setToken: (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },

  removeToken: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
};