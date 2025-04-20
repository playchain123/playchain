
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Coins, Image, Bot, Users } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Auto-collapse on mobile
  const effectiveIsOpen = !isMobile || isOpen;

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Asset Pools", path: "/asset-pools", icon: Coins },
    { name: "NFT Liquidity", path: "/nft-liquidity", icon: Image },
    { name: "Arbitrage Bot", path: "/arbitrage-bot", icon: Bot },
    { name: "RestakeDAO", path: "/restake-studio", icon: Users },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "h-screen bg-meta-dark border-r border-white/5 z-30",
          "transition-all duration-300 ease-in-out",
          effectiveIsOpen 
            ? "w-64 fixed md:sticky top-0 left-0" 
            : "w-0 -translate-x-full md:w-16 md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={cn(
            "h-16 flex items-center justify-between px-4 border-b border-white/5",
            !effectiveIsOpen && "md:justify-center"
          )}>
            {effectiveIsOpen && (
              <>
                <Link to="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md bg-gradient-to-r from-meta-purple to-meta-blue" />
                  <span className="font-bold text-xl">MetaPlayX</span>
                </Link>
                {isMobile && (
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                )}
              </>
            )}
            {!effectiveIsOpen && !isMobile && (
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-meta-purple to-meta-blue" />
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-2 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                  "hover:bg-white/5 group",
                  location.pathname === item.path 
                    ? "bg-white/10 text-meta-neon" 
                    : "text-gray-300",
                  !effectiveIsOpen && "md:justify-center"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5", 
                  location.pathname === item.path
                    ? "text-meta-neon"
                    : "text-gray-400 group-hover:text-white"
                )} />
                {effectiveIsOpen && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>

          {/* Toggle Button (Desktop only) */}
          {!isMobile && (
            <div className="border-t border-white/5 p-4 flex justify-center">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-white/5"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Menu Button */}
      {isMobile && !isOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-50 rounded-full bg-meta-purple text-white shadow-lg h-12 w-12"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default Sidebar;
