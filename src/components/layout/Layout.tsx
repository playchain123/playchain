
import { Outlet } from "react-router-dom";
import { WalletProvider } from "@/context/WalletContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <WalletProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col max-h-screen overflow-hidden">
          <Header />
          <div className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </WalletProvider>
  );
};

export default Layout;
