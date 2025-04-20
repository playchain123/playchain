
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/context/WalletContext";
import { useToast } from "@/components/ui/use-toast";
import {
  Image,
  Search,
  Filter,
  TrendingUp,
  ArrowRight,
  Info,
  Layers,
  BarChart3,
  CircleDollarSign,
  Star
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock NFT pools data
const nftPools = [
  {
    id: 1,
    name: "Axie Mystic Collection",
    image: "/placeholder.svg",
    game: "Axie Infinity",
    chain: "Ronin",
    fractionPrice: 0.042,
    priceChange: 12.5,
    marketCap: 3800000,
    liquidity: 850000,
    apy: 14.2,
    holders: 1248,
    popular: true
  },
  {
    id: 2,
    name: "CryptoKitties Founder Series",
    image: "/placeholder.svg",
    game: "CryptoKitties",
    chain: "Ethereum",
    fractionPrice: 0.078,
    priceChange: -3.2,
    marketCap: 5200000,
    liquidity: 1200000,
    apy: 9.8,
    holders: 876,
    popular: true
  },
  {
    id: 3,
    name: "Gods Unchained Mythic",
    image: "/placeholder.svg",
    game: "Gods Unchained",
    chain: "Base",
    fractionPrice: 0.019,
    priceChange: 7.4,
    marketCap: 1750000,
    liquidity: 420000,
    apy: 18.5,
    holders: 532,
    popular: false
  },
  {
    id: 4,
    name: "Illuvium Land Plots",
    image: "/placeholder.svg",
    game: "Illuvium",
    chain: "Optimism",
    fractionPrice: 0.095,
    priceChange: 5.1,
    marketCap: 4100000,
    liquidity: 960000,
    apy: 11.2,
    holders: 749,
    popular: false
  },
  {
    id: 5,
    name: "The Sandbox Premium Land",
    image: "/placeholder.svg",
    game: "The Sandbox",
    chain: "Polygon",
    fractionPrice: 0.064,
    priceChange: 9.3,
    marketCap: 3250000,
    liquidity: 780000,
    apy: 10.6,
    holders: 1053,
    popular: true
  },
  {
    id: 6,
    name: "Decentraland Estates",
    image: "/placeholder.svg",
    game: "Decentraland",
    chain: "Ethereum",
    fractionPrice: 0.085,
    priceChange: 2.8,
    marketCap: 6100000,
    liquidity: 1450000,
    apy: 8.4,
    holders: 1532,
    popular: true
  }
];

const NFTLiquidity = () => {
  const { isConnected } = useWallet();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter NFTs
  const filteredNFTs = nftPools.filter(nft => 
    nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nft.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nft.chain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePurchase = (poolId: number) => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to purchase NFT fractions",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Purchase initiated",
      description: "Please approve the transaction in your wallet",
    });

    // Here we would handle the actual purchase logic with web3
    setTimeout(() => {
      toast({
        title: "NFT fractions purchased",
        description: "Your assets have been added to your portfolio",
      });
    }, 2000);
  };

  const getFeaturedPools = () => {
    return nftPools.filter(pool => pool.popular);
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-6">
        <h1 className="text-3xl font-bold meta-gradient">Cross-Game NFT Liquidity Pools</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Trade fractions of high-value in-game NFTs across multiple games and chains.
          All fractionalized NFTs are yield-bearing through restaking protocols.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Total Value Locked</p>
              <CircleDollarSign className="h-5 w-5 text-meta-purple" />
            </div>
            <h3 className="text-2xl font-bold mt-2">$24.2M</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Fractionalized NFTs</p>
              <Layers className="h-5 w-5 text-meta-blue" />
            </div>
            <h3 className="text-2xl font-bold mt-2">1,248</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Average APY</p>
              <TrendingUp className="h-5 w-5 text-meta-green" />
            </div>
            <h3 className="text-2xl font-bold mt-2">12.1%</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Total Holders</p>
              <BarChart3 className="h-5 w-5 text-meta-cyan" />
            </div>
            <h3 className="text-2xl font-bold mt-2">5,990</h3>
          </CardContent>
        </Card>
      </section>

      {/* Featured Pools */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured NFT Pools</h2>
          <Button variant="link" className="text-meta-neon">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getFeaturedPools().map(pool => (
            <Card key={pool.id} className="meta-card overflow-hidden">
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-meta-purple/20 to-meta-blue/20">
                <div className="absolute top-2 right-2 bg-meta-purple text-white text-xs px-2 py-1 rounded-full">
                  {pool.chain}
                </div>
                <img 
                  src={pool.image} 
                  alt={pool.name} 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{pool.name}</CardTitle>
                    <CardDescription>{pool.game}</CardDescription>
                  </div>
                  {pool.popular && (
                    <div className="flex items-center text-xs text-yellow-400">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400" />
                      Popular
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pb-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Fraction Price</p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{pool.fractionPrice} ETH</p>
                      <span className={`text-xs ${pool.priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {pool.priceChange >= 0 ? '+' : ''}{pool.priceChange}%
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400">APY</p>
                    <p className="font-medium text-meta-neon">{pool.apy}%</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    className="meta-button-primary w-full" 
                    onClick={() => handlePurchase(pool.id)}
                  >
                    Buy Fractions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All NFT Pools */}
      <section>
        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-bold">All NFT Pools</h2>
              
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search NFT pools..."
                    className="pl-9 bg-secondary/50 border-white/10 text-white w-48 md:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon" className="border-white/10 bg-secondary/50">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <TabsList className="bg-secondary/50">
            <TabsTrigger value="all">All NFTs</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="metaverse">Metaverse</TabsTrigger>
            <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {filteredNFTs.map(pool => (
                <Card key={pool.id} className="meta-panel overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 aspect-square md:aspect-auto bg-gradient-to-br from-meta-purple/20 to-meta-blue/20">
                      <img 
                        src={pool.image} 
                        alt={pool.name} 
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    
                    <div className="p-6 flex-1">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{pool.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <span>{pool.game}</span>
                            <span className="text-gray-500">•</span>
                            <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{pool.chain}</span>
                          </div>
                        </div>
                        
                        <div className="mt-2 md:mt-0 flex items-center">
                          <div className="bg-meta-purple/10 px-3 py-1 rounded-lg">
                            <div className="text-xs text-gray-400">APY</div>
                            <div className="font-medium text-meta-neon">{pool.apy}%</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-400">Fraction Price</p>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{pool.fractionPrice} ETH</p>
                            <span className={`text-xs ${pool.priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {pool.priceChange >= 0 ? '+' : ''}{pool.priceChange}%
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-xs text-gray-400">Market Cap</p>
                          <p className="font-medium">${(pool.marketCap / 1000000).toFixed(1)}M</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-gray-400">Liquidity</p>
                          <p className="font-medium">${(pool.liquidity / 1000000).toFixed(2)}M</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-gray-400">Holders</p>
                          <p className="font-medium">{pool.holders.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <Button 
                          className="meta-button-primary flex-1" 
                          onClick={() => handlePurchase(pool.id)}
                        >
                          Buy Fractions
                        </Button>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                                View Details
                                <Info className="ml-2 h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>See full collection details and analytics</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gaming">
            <div className="rounded-lg border border-white/10 p-8 bg-secondary/20 text-center">
              <h3 className="text-xl font-semibold mb-2">Gaming NFTs Filter</h3>
              <p className="text-gray-400">
                This tab would show only gaming-related NFT pools
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="metaverse">
            <div className="rounded-lg border border-white/10 p-8 bg-secondary/20 text-center">
              <h3 className="text-xl font-semibold mb-2">Metaverse NFTs Filter</h3>
              <p className="text-gray-400">
                This tab would show only metaverse-related NFT pools
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="collectibles">
            <div className="rounded-lg border border-white/10 p-8 bg-secondary/20 text-center">
              <h3 className="text-xl font-semibold mb-2">Collectible NFTs Filter</h3>
              <p className="text-gray-400">
                This tab would show only collectible-focused NFT pools
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* How It Works */}
      <section>
        <Card className="meta-panel bg-card-gradient">
          <CardHeader>
            <CardTitle>How NFT Fractionalization Works</CardTitle>
            <CardDescription>
              Understanding how we convert illiquid NFTs into tradable, yield-bearing assets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-purple/20 flex items-center justify-center mb-4">
                  <Image className="h-6 w-6 text-meta-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. NFT Collection</h3>
                <p className="text-gray-300">
                  High-value NFTs from the same collection are pooled together to create a diversified asset basket.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-blue/20 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Tokenization</h3>
                <p className="text-gray-300">
                  The collection is fractionalized into fungible ERC-20 tokens that anyone can trade with minimal slippage.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-green/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-meta-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Yield Generation</h3>
                <p className="text-gray-300">
                  Fractions are automatically restaked to generate yield while maintaining exposure to the NFT's value.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default NFTLiquidity;
