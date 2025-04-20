
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useWallet } from "@/context/WalletContext";
import { useToast } from "@/components/ui/use-toast";
import {
  ArrowRight,
  ArrowUpDown,
  CircleDollarSign,
  Filter,
  Search,
  TrendingUp,
  Coins,
  Info,
  ExternalLink,
  Clock
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock data for asset pools
const assetPools = [
  {
    id: 1,
    name: "Axie Infinity SLP",
    icon: "🎮",
    apy: 12.6,
    tvl: 8750000,
    chain: "Ethereum",
    restakingProvider: "Eigenlayer",
    tags: ["Gaming", "Popular"],
    tokenPrice: 0.0023,
    priceChange: 5.2,
    capacity: 85,
  },
  {
    id: 2,
    name: "Illuvium ILV",
    icon: "🌌",
    apy: 18.9,
    tvl: 15200000,
    chain: "Ethereum",
    restakingProvider: "Swell",
    tags: ["Gaming", "High APY"],
    tokenPrice: 68.42,
    priceChange: -2.1,
    capacity: 92,
  },
  {
    id: 3,
    name: "Gala Games GALA",
    icon: "🎲",
    apy: 9.4,
    tvl: 6350000,
    chain: "Arbitrum",
    restakingProvider: "Eigenlayer",
    tags: ["Gaming", "Low Risk"],
    tokenPrice: 0.022,
    priceChange: 1.3,
    capacity: 63,
  },
  {
    id: 4,
    name: "Gods Unchained GODS",
    icon: "🃏",
    apy: 14.2,
    tvl: 4920000,
    chain: "Base",
    restakingProvider: "Swell",
    tags: ["Gaming", "TCG"],
    tokenPrice: 0.17,
    priceChange: 7.8,
    capacity: 74,
  },
  {
    id: 5,
    name: "The Sandbox SAND",
    icon: "🏝️",
    apy: 8.7,
    tvl: 11800000,
    chain: "Optimism",
    restakingProvider: "Eigenlayer",
    tags: ["Metaverse", "Popular"],
    tokenPrice: 0.39,
    priceChange: -0.8,
    capacity: 89,
  },
  {
    id: 6,
    name: "Decentraland MANA",
    icon: "🌐",
    apy: 7.9,
    tvl: 9250000,
    chain: "Ethereum",
    restakingProvider: "Swell",
    tags: ["Metaverse"],
    tokenPrice: 0.42,
    priceChange: 3.5,
    capacity: 91,
  }
];

const AssetPools = () => {
  const { isConnected } = useWallet();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("apy");
  const [sortOrder, setSortOrder] = useState("desc");

  // Filter and sort pools
  const filteredPools = assetPools
    .filter(pool => 
      pool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pool.chain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      const factor = sortOrder === "asc" ? 1 : -1;
      return (a[sortBy as keyof typeof a] as number) > (b[sortBy as keyof typeof b] as number) 
        ? factor 
        : -factor;
    });

  const handleSort = (key: string) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("desc");
    }
  };

  const handleStake = (poolId: number) => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to stake assets",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Staking initiated",
      description: "Please approve the transaction in your wallet",
    });

    // Here we would handle the actual staking logic with web3
    setTimeout(() => {
      toast({
        title: "Assets staked successfully",
        description: "Your assets are now earning yield",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="text-center space-y-4 py-6">
        <h1 className="text-3xl font-bold meta-gradient">Restaking-Powered Asset Pools</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Stake your in-game tokens and NFTs to earn passive yield through Eigenlayer and Swell while you play.
          All staked assets contribute to securing the network and earn additional rewards.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Total Value Locked</p>
              <CircleDollarSign className="h-5 w-5 text-meta-purple" />
            </div>
            <h3 className="text-2xl font-bold mt-2">$56.27M</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Average APY</p>
              <TrendingUp className="h-5 w-5 text-meta-cyan" />
            </div>
            <h3 className="text-2xl font-bold mt-2">12.1%</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Active Stakers</p>
              <Coins className="h-5 w-5 text-meta-green" />
            </div>
            <h3 className="text-2xl font-bold mt-2">12,458</h3>
          </CardContent>
        </Card>
      </section>

      {/* Pool Tabs and Filters */}
      <section>
        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="all">All Pools</TabsTrigger>
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
              <TabsTrigger value="metaverse">Metaverse</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search pools..."
                  className="pl-9 bg-secondary/50 border-white/10 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="border-white/10 bg-secondary/50">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-4">
              {/* Pools List */}
              <Card className="meta-panel overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="p-4 font-medium text-gray-400">Asset</th>
                        <th className="p-4 font-medium text-gray-400">
                          <button 
                            className="flex items-center gap-1 hover:text-white"
                            onClick={() => handleSort('chain')}
                          >
                            Chain
                            <ArrowUpDown className="h-3 w-3" />
                          </button>
                        </th>
                        <th className="p-4 font-medium text-gray-400">Provider</th>
                        <th className="p-4 font-medium text-gray-400">
                          <button 
                            className="flex items-center gap-1 hover:text-white"
                            onClick={() => handleSort('tokenPrice')}
                          >
                            Price
                            <ArrowUpDown className="h-3 w-3" />
                          </button>
                        </th>
                        <th className="p-4 font-medium text-gray-400">
                          <button 
                            className="flex items-center gap-1 hover:text-white"
                            onClick={() => handleSort('apy')}
                          >
                            APY
                            <ArrowUpDown className="h-3 w-3" />
                          </button>
                        </th>
                        <th className="p-4 font-medium text-gray-400">
                          <button 
                            className="flex items-center gap-1 hover:text-white"
                            onClick={() => handleSort('tvl')}
                          >
                            TVL
                            <ArrowUpDown className="h-3 w-3" />
                          </button>
                        </th>
                        <th className="p-4 font-medium text-gray-400">Capacity</th>
                        <th className="p-4 font-medium text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPools.map((pool) => (
                        <tr 
                          key={pool.id} 
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-gradient-to-br from-meta-purple/20 to-meta-blue/20 rounded-full flex items-center justify-center text-lg">
                                {pool.icon}
                              </div>
                              <div>
                                <p className="font-medium">{pool.name}</p>
                                <div className="flex gap-2 mt-1">
                                  {pool.tags.map((tag, index) => (
                                    <span 
                                      key={index} 
                                      className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">{pool.chain}</td>
                          <td className="p-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center">
                                    {pool.restakingProvider}
                                    <Info className="h-4 w-4 ml-1 text-gray-400" />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Secured via {pool.restakingProvider} restaking protocol</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </td>
                          <td className="p-4">
                            <div>
                              <div className="font-medium">${pool.tokenPrice.toFixed(4)}</div>
                              <div className={pool.priceChange >= 0 ? "text-green-400 text-xs" : "text-red-400 text-xs"}>
                                {pool.priceChange >= 0 ? "+" : ""}{pool.priceChange}%
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-meta-neon font-medium">{pool.apy}%</td>
                          <td className="p-4">${(pool.tvl / 1000000).toFixed(1)}M</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={pool.capacity} 
                                className="w-16 h-2 bg-white/10" 
                              />
                              <span className="text-xs text-gray-300">{pool.capacity}%</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Button 
                              size="sm" 
                              className="meta-button-primary"
                              onClick={() => handleStake(pool.id)}
                            >
                              Stake
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="gaming">
            <div className="rounded-lg border border-white/10 p-8 bg-secondary/20 text-center">
              <h3 className="text-xl font-semibold mb-2">Gaming Assets Filter</h3>
              <p className="text-gray-400">
                Showing gaming-related token pools. Same data as in "All Pools" tab but filtered.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="metaverse">
            <div className="rounded-lg border border-white/10 p-8 bg-secondary/20 text-center">
              <h3 className="text-xl font-semibold mb-2">Metaverse Assets Filter</h3>
              <p className="text-gray-400">
                Showing metaverse-related token pools. Same data as in "All Pools" tab but filtered.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* How It Works */}
      <section>
        <Card className="meta-panel">
          <CardHeader>
            <CardTitle>How Restaking Works</CardTitle>
            <CardDescription>
              Learn how your game assets generate yield through restaking protocols
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-meta-purple/20 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-meta-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Stake Your Assets</h3>
                <p className="text-gray-300">
                  Deposit your game tokens or NFTs into our secure restaking pools.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-meta-blue/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Generate Yield</h3>
                <p className="text-gray-300">
                  Your assets help secure the network through Eigenlayer or Swell and earn rewards.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-meta-green/20 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-meta-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Withdraw Anytime</h3>
                <p className="text-gray-300">
                  Flexible withdrawals allow you to claim your assets and rewards at any time.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
              Learn More About Restaking
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default AssetPools;
