"use client";

import { useAuthStore } from "@/lib/authStore";
import { DashNav } from "./components/dash-nav";
import LogoutBackdrop from "./components/logout-backdrop";
import OrderDeleteBackdrop from "./customer-orders/components/delete-Order-Backdrop";
import DeliveredBackdrop from "./customer-orders/components/deliverd-backdrop";
import OrderCancelBackdrop from "./customer-orders/components/cancel-order-backdrop";
import { useOrderStore } from "@/lib/orderStore";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthOpen } = useAuthStore();
  const orderStore = useOrderStore();

  const backdrops = [
    isAuthOpen && <LogoutBackdrop key="logout" />,
    orderStore.isBackdropOpen && <OrderDeleteBackdrop key="deleteOrder" />,
    orderStore.isDeliverdBackdrop && <DeliveredBackdrop key="delivered" />,
    orderStore.isCancelBackdrop && <OrderCancelBackdrop key="cancelOrder" />,
  ];

  return (
    <>
      {backdrops}
      <DashNav />
      <main className="flex flex-col px-10 min-h-screen w-full">{children}</main>
    </>
  );
};

export default DashboardLayout;
