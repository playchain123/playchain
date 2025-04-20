
import { Outlet } from "react-router-dom";
import { WalletProvider } from "@/context/WalletContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TopNavigation from "./TopNavigation";

const Layout = () => {
  return (
    <WalletProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <main className="flex-1 flex flex-col md:flex-row h-screen w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col w-full">
            <Header />
            <TopNavigation />
            <div className="flex-1 p-4 md:p-6 overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </WalletProvider>
  );
};

export default Layout;
