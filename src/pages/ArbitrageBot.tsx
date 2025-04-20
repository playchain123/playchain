
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWallet } from "@/context/WalletContext";
import { useToast } from "@/components/ui/use-toast";
import {
  Bot,
  Zap,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Settings,
  Shield,
  Lightbulb,
  Activity,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  AlertTriangle,
  ArrowLeftRight,
} from "lucide-react";

// Mock arbitrage strategies
const strategies = [
  {
    id: 1,
    name: "Dynamic Multi-Chain Swapper",
    description: "Automatically routes trades across chains for maximum yield",
    riskLevel: "Medium",
    expectedReturn: 14.2,
    timeFrame: "24-48 hours",
    minAmount: 100,
    chains: ["Ethereum", "Arbitrum", "Optimism"],
    performance: [
      { date: "Apr 10", value: 102 },
      { date: "Apr 11", value: 107 },
      { date: "Apr 12", value: 109 },
      { date: "Apr 13", value: 112 },
      { date: "Apr 14", value: 108 },
      { date: "Apr 15", value: 114 },
    ],
    active: true,
  },
  {
    id: 2,
    name: "Restaking Yield Aggregator",
    description: "Rotates between restaking providers to capture highest APY",
    riskLevel: "Low",
    expectedReturn: 9.6,
    timeFrame: "7-14 days",
    minAmount: 50,
    chains: ["Ethereum", "Base"],
    performance: [
      { date: "Apr 10", value: 100 },
      { date: "Apr 11", value: 101 },
      { date: "Apr 12", value: 103 },
      { date: "Apr 13", value: 104 },
      { date: "Apr 14", value: 106 },
      { date: "Apr 15", value: 108 },
    ],
    active: false,
  },
  {
    id: 3,
    name: "NFT Floor Price Arbitrage",
    description: "Captures price differences across NFT marketplaces",
    riskLevel: "High",
    expectedReturn: 21.5,
    timeFrame: "3-5 days",
    minAmount: 250,
    chains: ["Ethereum", "Polygon", "Ronin"],
    performance: [
      { date: "Apr 10", value: 100 },
      { date: "Apr 11", value: 95 },
      { date: "Apr 12", value: 110 },
      { date: "Apr 13", value: 105 },
      { date: "Apr 14", value: 118 },
      { date: "Apr 15", value: 121 },
    ],
    active: false,
  },
  {
    id: 4,
    name: "Game Token Flash Arbitrage",
    description: "Executes rapid trades during game token release events",
    riskLevel: "Very High",
    expectedReturn: 35.8,
    timeFrame: "1-24 hours",
    minAmount: 500,
    chains: ["All Supported"],
    performance: [
      { date: "Apr 10", value: 100 },
      { date: "Apr 11", value: 90 },
      { date: "Apr 12", value: 130 },
      { date: "Apr 13", value: 115 },
      { date: "Apr 14", value: 125 },
      { date: "Apr 15", value: 136 },
    ],
    active: false,
  },
  {
    id: 5,
    name: "Stable Restaking Optimizer",
    description: "Conservative strategy focusing only on staked ETH yield differences",
    riskLevel: "Very Low",
    expectedReturn: 5.2,
    timeFrame: "30+ days",
    minAmount: 10,
    chains: ["Ethereum"],
    performance: [
      { date: "Apr 10", value: 100 },
      { date: "Apr 11", value: 100.5 },
      { date: "Apr 12", value: 101 },
      { date: "Apr 13", value: 101.8 },
      { date: "Apr 14", value: 102.5 },
      { date: "Apr 15", value: 103.2 },
    ],
    active: false,
  }
];

const ArbitrageBot = () => {
  const { isConnected } = useWallet();
  const { toast } = useToast();
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState(100);
  const [riskLevel, setRiskLevel] = useState("medium");
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter(item => item !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  const activateStrategy = (strategyId: number) => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to activate arbitrage strategies",
        variant: "destructive"
      });
      return;
    }

    setSelectedStrategy(strategyId);
    toast({
      title: "Strategy activation initiated",
      description: "Please approve the transaction in your wallet",
    });

    // Here we would handle the actual activation logic with web3
    setTimeout(() => {
      toast({
        title: "Strategy activated",
        description: "Your AI arbitrage bot is now running",
      });
    }, 2000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Very Low":
        return "text-blue-400";
      case "Low":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "High":
        return "text-orange-400";
      case "Very High":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getRecommendedStrategy = () => {
    if (riskLevel === "low") {
      return strategies.find(s => s.riskLevel === "Low" || s.riskLevel === "Very Low");
    } else if (riskLevel === "medium") {
      return strategies.find(s => s.riskLevel === "Medium");
    } else {
      return strategies.find(s => s.riskLevel === "High" || s.riskLevel === "Very High");
    }
  };

  const calculatePotentialReturn = (strategy: any, amount: number) => {
    return ((amount * strategy.expectedReturn) / 100) + amount;
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-6">
        <h1 className="text-3xl font-bold meta-gradient">AI-Driven Game Asset Arbitrage Bot</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our DeFAI trading bot automatically swaps and stakes assets between chains for optimal returns,
          using restaking yields as profit margins while managing risk.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Total Value Managed</p>
              <Bot className="h-5 w-5 text-meta-purple" />
            </div>
            <h3 className="text-2xl font-bold mt-2">$14.8M</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Average Return (30d)</p>
              <TrendingUp className="h-5 w-5 text-meta-green" />
            </div>
            <h3 className="text-2xl font-bold mt-2">+18.2%</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Active Strategies</p>
              <Zap className="h-5 w-5 text-meta-cyan" />
            </div>
            <h3 className="text-2xl font-bold mt-2">5</h3>
          </CardContent>
        </Card>
      </section>

      {/* Strategy Builder */}
      <section>
        <Card className="meta-panel">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-meta-purple" />
              AI Strategy Builder
            </CardTitle>
            <CardDescription>
              Customize your arbitrage strategy based on your risk tolerance and investment amount
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Risk Level
                  </label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400 px-2">
                      <span>Conservative</span>
                      <span>Balanced</span>
                      <span>Aggressive</span>
                    </div>
                    <Tabs defaultValue="medium" onValueChange={setRiskLevel}>
                      <TabsList className="grid grid-cols-3 h-9 bg-secondary/50">
                        <TabsTrigger value="low">Low</TabsTrigger>
                        <TabsTrigger value="medium">Medium</TabsTrigger>
                        <TabsTrigger value="high">High</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Investment Amount
                  </label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="meta-input"
                    />
                    <Select defaultValue="eth">
                      <SelectTrigger className="w-32 bg-secondary border-white/10">
                        <SelectValue placeholder="Token" />
                      </SelectTrigger>
                      <SelectContent className="bg-meta-dark border-white/10 text-white">
                        <SelectItem value="eth">ETH</SelectItem>
                        <SelectItem value="usdc">USDC</SelectItem>
                        <SelectItem value="wbtc">WBTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Chain Selection
                  </label>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full bg-secondary border-white/10">
                      <SelectValue placeholder="Select chains" />
                    </SelectTrigger>
                    <SelectContent className="bg-meta-dark border-white/10 text-white">
                      <SelectItem value="all">All Supported Chains</SelectItem>
                      <SelectItem value="eth">Ethereum Only</SelectItem>
                      <SelectItem value="l2">L2s (Arbitrum, Optimism)</SelectItem>
                      <SelectItem value="gaming">Gaming Chains</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Recommended Strategy</h3>
                {getRecommendedStrategy() && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{getRecommendedStrategy()?.name}</p>
                        <p className="text-sm text-gray-400 mt-1">{getRecommendedStrategy()?.description}</p>
                      </div>
                      <div className={`${getRiskColor(getRecommendedStrategy()?.riskLevel || '')} px-2 py-1 rounded-full text-xs border border-white/10`}>
                        {getRecommendedStrategy()?.riskLevel}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Expected Return</p>
                        <p className="font-medium text-meta-neon">+{getRecommendedStrategy()?.expectedReturn}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Time Frame</p>
                        <p className="font-medium">{getRecommendedStrategy()?.timeFrame}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400">Potential Outcome</p>
                      <div className="bg-secondary/50 mt-1 p-3 rounded-lg grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-400">Initial</p>
                          <p className="font-medium">{investmentAmount} ETH</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Estimated Return</p>
                          <p className="font-medium text-meta-neon">
                            {calculatePotentialReturn(getRecommendedStrategy() || {}, investmentAmount).toFixed(2)} ETH
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="meta-button-primary w-full"
                      onClick={() => activateStrategy(getRecommendedStrategy()?.id || 0)}
                    >
                      Activate Strategy
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Available Strategies */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Available Arbitrage Strategies</h2>
        <div className="space-y-4">
          {strategies.map((strategy) => (
            <Card 
              key={strategy.id} 
              className={`meta-panel overflow-hidden transition-all duration-300 ${
                selectedStrategy === strategy.id ? "border-meta-purple/50" : ""
              }`}
            >
              <div
                className="p-4 cursor-pointer hover:bg-white/5"
                onClick={() => toggleExpand(strategy.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full ${
                      strategy.active ? "bg-meta-purple/20" : "bg-secondary/50"
                    } flex items-center justify-center`}>
                      <Bot className={`h-5 w-5 ${
                        strategy.active ? "text-meta-purple" : "text-gray-400"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{strategy.name}</h3>
                      <p className="text-sm text-gray-400">{strategy.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <div className={`${getRiskColor(strategy.riskLevel)}`}>
                        {strategy.riskLevel}
                      </div>
                      <div className="text-meta-neon text-sm">
                        +{strategy.expectedReturn}%
                      </div>
                    </div>
                    {expanded.includes(strategy.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              
              {expanded.includes(strategy.id) && (
                <div className="px-4 pb-4 pt-2 border-t border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4 md:col-span-2">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-secondary/30 p-3 rounded-lg">
                          <p className="text-xs text-gray-400">Risk Level</p>
                          <p className={`font-medium ${getRiskColor(strategy.riskLevel)}`}>
                            {strategy.riskLevel}
                          </p>
                        </div>
                        
                        <div className="bg-secondary/30 p-3 rounded-lg">
                          <p className="text-xs text-gray-400">Expected Return</p>
                          <p className="font-medium text-meta-neon">+{strategy.expectedReturn}%</p>
                        </div>
                        
                        <div className="bg-secondary/30 p-3 rounded-lg">
                          <p className="text-xs text-gray-400">Time Frame</p>
                          <p className="font-medium">{strategy.timeFrame}</p>
                        </div>
                        
                        <div className="bg-secondary/30 p-3 rounded-lg">
                          <p className="text-xs text-gray-400">Min Investment</p>
                          <p className="font-medium">{strategy.minAmount} ETH</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-meta-purple" />
                          <h4 className="font-medium">Strategy Performance</h4>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-1">
                          {strategy.performance.map((point, index) => (
                            <div key={index} className="flex flex-col items-center gap-1">
                              <div 
                                className="bg-meta-purple w-8 rounded-t-sm" 
                                style={{height: `${(point.value - 100) * 2 + 20}px`}}
                              ></div>
                              <p className="text-xs text-gray-400">{point.date}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Base: 100</span>
                          <span>Current: {strategy.performance[strategy.performance.length - 1].value}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Supported Chains</h4>
                        <div className="flex flex-wrap gap-2">
                          {strategy.chains.map((chain, index) => (
                            <div
                              key={index}
                              className="bg-secondary/30 px-2 py-1 rounded-full text-xs"
                            >
                              {chain}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          className="meta-input w-full"
                          defaultValue={strategy.minAmount}
                        />
                        <Button
                          className={`meta-button-primary w-full ${
                            selectedStrategy === strategy.id ? "animate-pulse" : ""
                          }`}
                          onClick={() => activateStrategy(strategy.id)}
                        >
                          {selectedStrategy === strategy.id ? (
                            <>
                              Strategy Active
                              <Zap className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Activate Strategy
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-white/10 hover:bg-white/5"
                        >
                          Simulate Returns
                          <BarChart3 className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section>
        <Card className="meta-panel">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-meta-blue" />
              How DeFAI Arbitrage Works
            </CardTitle>
            <CardDescription>
              Understanding how our AI identifies and executes cross-chain arbitrage opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-purple/20 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-meta-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Strategy Setup</h3>
                <p className="text-gray-300">
                  Define your risk tolerance, investment amount, and chain preferences to customize your strategy.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-blue/20 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-gray-300">
                  Our AI continuously monitors pricing discrepancies between chains and DEXs for optimal entry points.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-cyan/20 flex items-center justify-center mb-4">
                  <ArrowLeftRight className="h-6 w-6 text-meta-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Execution</h3>
                <p className="text-gray-300">
                  The bot automatically executes trades across chains, swapping assets to capture price differences.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white/5">
                <div className="h-12 w-12 rounded-full bg-meta-green/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-meta-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Yield Generation</h3>
                <p className="text-gray-300">
                  Between arbitrage opportunities, assets are automatically restaked to generate additional yield.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/5 pt-4 flex items-center justify-between">
            <div className="flex items-center text-yellow-400 text-sm">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Automated trading involves risk. Past performance does not guarantee future results.
            </div>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Read Risk Disclosure
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default ArbitrageBot;
