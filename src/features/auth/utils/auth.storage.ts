import { STORAGE_KEYS } from "@/shared/constants/storage";
export const authStorage = {
    getToken : () : string | null => {
        if(typeof window === "undefined") return null;
        
        return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    },

    setToken : ( token : string) : void => {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN,token);
    },

    removeToken : () : void => {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    },

    clear : () : void => {
        localStorage.clear();
    },
}