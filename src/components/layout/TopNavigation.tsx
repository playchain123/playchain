
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Coins, Image, Bot, Users } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Asset Pools", path: "/asset-pools", icon: Coins },
  { name: "NFT Liquidity", path: "/nft-liquidity", icon: Image },
  { name: "Arbitrage Bot", path: "/arbitrage-bot", icon: Bot },
  { name: "RestakeDAO", path: "/restake-studio", icon: Users },
];

const TopNavigation = () => {
  const location = useLocation();

  return (
    <div className="bg-meta-dark/90 backdrop-blur-sm border-b border-white/5 py-2 px-4 md:px-6 overflow-x-auto sticky top-0 z-10">
      <nav className="flex space-x-1 md:space-x-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-2",
              location.pathname === item.path
                ? "bg-white/10 text-meta-neon"
                : "text-gray-300 hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "h-4 w-4",
              location.pathname === item.path
                ? "text-meta-neon"
                : "text-gray-400"
            )} />
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default TopNavigation;
