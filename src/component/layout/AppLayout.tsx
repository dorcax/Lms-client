import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/component/layout/AppSidebar";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 py-4 px-6 flex flex-col overflow-y-auto bg-[#F5F6FA] w-full gap-2">
        <AppHeader />
        <Outlet />
        {/* <footer className="mt-auto py-6 px-10 border-t border-[#e7edf3] dark:border-slate-800 text-center">
          <p className="text-sm text-[#4c739a] dark:text-slate-500">
            © {new Date().getFullYear()} Haven Hotel Management Systems. All
            rights reserved.
          </p>
        </footer> */}
      </main>
    </SidebarProvider>
  );
}
