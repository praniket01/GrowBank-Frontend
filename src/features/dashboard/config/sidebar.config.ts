import {
  LayoutDashboard,
  ArrowRightLeft,
  ReceiptText,
  User,
  LogOut,
} from "lucide-react";

import { ROUTES } from "@/shared/constants/routes";

export const sidebarItems = [
  {
    title: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Transfer Money",
    href: ROUTES.TRANSFER,
    icon: ArrowRightLeft,
  },
  {
    title: "Transactions",
    href: ROUTES.TRANSACTIONS,
    icon: ReceiptText,
  },
  {
    title: "Profile",
    href: ROUTES.PROFILE,
    icon: User,
  },
];

export const logoutItem = {
  title: "Logout",
  icon: LogOut,
};