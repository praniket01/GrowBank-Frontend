"use client"
import { logoutItem, sidebarItems } from "../config/sidebar.config";
import SidebarItem from "./SidebarItem";

export default function Sidebar(){
    return(
        <aside className="hidden md:flex w-72 flex-col border-r bg-white">
        <div className="border-b p-6">
            <h1 className="text-2xl font-bold text-blue-600">
                GrowBank
            </h1>
            <p className="text-sm text-gray-50">
                Digital Banking
            </p>
        </div>
        <nav className="flex-1 space-y-2 p-4">
            {sidebarItems.map((it)=>(
                <SidebarItem 
                    key={it.title}
                    item = {it}
                />
            ))}
        </nav>
        <div className="border-t p-4">
            <SidebarItem 
            item={logoutItem}
            isLogout
            onLogout={()=>{
                console.log("Logout Clicked");
            }}
            />
        </div>
        </aside>   
    )
}