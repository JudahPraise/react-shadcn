import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import { AlertProvider } from "@/context/AlertContext";

function Layout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Siderbar Container */}
      <Sidebar />
      <div className="flex flex-col">
        {/* Header Container */}
        <Header />
        {/* Page Container */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <AlertProvider>
            <Outlet />
          </AlertProvider>
        </main>
      </div>
    </div>
  );
}

export default Layout;
