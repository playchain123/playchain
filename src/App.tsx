
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import AssetPools from "./pages/AssetPools";
import NFTLiquidity from "./pages/NFTLiquidity";
import ArbitrageBot from "./pages/ArbitrageBot";
import RestakeStudio from "./pages/RestakeStudio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/asset-pools" element={<AssetPools />} />
            <Route path="/nft-liquidity" element={<NFTLiquidity />} />
            <Route path="/arbitrage-bot" element={<ArbitrageBot />} />
            <Route path="/restake-studio" element={<RestakeStudio />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
