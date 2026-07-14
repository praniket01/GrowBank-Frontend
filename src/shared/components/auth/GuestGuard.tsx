import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const GuestGuard = ({children} : {children : React.ReactNode}) => { 
    const router = useRouter();

    useEffect( () =>{
        const token =localStorage.getItem("token");

    if(token) {
        router.replace("/dashboard");
        
    }
    }, [] )
    return children;
}