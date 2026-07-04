import { User } from "@/features/auth/types/auth.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
    token : string |null,
    user : User | null,
    isLoading : boolean | null,
    hasHydrated : boolean | null,
    setUser : (user : User) => void,
    setLoading : (loading : boolean) => void,
    setHasHydrated : (state : boolean) => void,
    isAuthenticated : boolean | null,
    login : (
        user : User,
        token : string,
    )=> void,
    logout : () => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user : null,
            token : null,
            isAuthenticated : false,
            isLoading : false,
            hasHydrated : false,
            login : (user, token) => set ({
                user,token,isAuthenticated : true
            }),
            logout : () => set({user :null,token:null,isAuthenticated :false}),
            setUser : (user) => set({user}),
            setLoading : (loading) => (set({isLoading : loading})),
            setHasHydrated : (state) => (set({isLoading : state})),
        }),
        {
            name : "growbank-auth",
            storage : createJSONStorage(() => localStorage),
            partialize : (state) => ({
                user : state.user,
                token : state.token,
                isAuthenticated : state.isAuthenticated
            }),
            onRehydrateStorage : () => (state) => {
                state?.setHasHydrated(true);
            }
        }
    )
);