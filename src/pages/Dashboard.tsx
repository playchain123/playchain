
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useWallet } from "@/context/WalletContext";
import { ArrowRight, Coins, Image, Bot, Users, TrendingUp, Layers, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { isConnected } = useWallet();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow -z-10" />
        <h1 className="text-4xl md:text-5xl font-bold meta-gradient">
          MetaPlayX
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          The Cross-Chain Game Asset Hub Secured by Restaked Infrastructure
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button asChild className="meta-button-primary">
            <Link to="/asset-pools">
              Explore Asset Pools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
            <Link to="/nft-liquidity">
              Trade NFTs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Value Locked" 
          value="$128.4M" 
          change="+12.5%" 
          isPositive={true} 
        />
        <StatCard 
          title="Restaking APY" 
          value="14.2%" 
          change="+2.1%" 
          isPositive={true} 
        />
        <StatCard 
          title="Assets Bridged (24h)" 
          value="$3.8M" 
          change="-5.3%" 
          isPositive={false} 
        />
        <StatCard 
          title="Active AVSs" 
          value="16" 
          change="+4" 
          isPositive={true} 
        />
      </section>

      {/* Main Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Restaking-Powered Asset Pools"
          description="Stake your in-game tokens and NFTs through Eigenlayer or Swell and earn passive yield while you play."
          icon={<Coins className="h-8 w-8 text-meta-purple" />}
          to="/asset-pools"
          stats={[
            { label: "APY Range", value: "4.2% - 18.1%" },
            { label: "Total Pools", value: "24" }
          ]}
        />
        
        <FeatureCard
          title="Cross-Game NFT Liquidity Pools"
          description="Combine low-liquidity NFTs into fractionalized, yield-bearing tokens. Stake them in prediction markets."
          icon={<Image className="h-8 w-8 text-meta-blue" />}
          to="/nft-liquidity"
          stats={[
            { label: "Fractionalized NFTs", value: "1,235" },
            { label: "Marketplace Volume", value: "$920K" }
          ]}
        />
        
        <FeatureCard
          title="AI-Driven Game Asset Arbitrage Bot"
          description="Our DeFAI trading bot automatically swaps and stakes assets between chains for optimal returns."
          icon={<Bot className="h-8 w-8 text-meta-cyan" />}
          to="/arbitrage-bot"
          stats={[
            { label: "Average Returns", value: "+9.3%" },
            { label: "Active Strategies", value: "7" }
          ]}
        />
        
        <FeatureCard
          title="RestakeDAO Studio"
          description="Submit modules or apps to be secured by restaked assets. Get funding and governance from the community."
          icon={<Users className="h-8 w-8 text-meta-green" />}
          to="/restake-studio"
          stats={[
            { label: "Projects Funded", value: "12" },
            { label: "Total Funding", value: "$3.4M" }
          ]}
        />
      </section>

      {/* Network Status */}
      <section>
        <Card className="meta-panel">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Shield className="mr-2 h-5 w-5 text-meta-purple" />
              Network Security Status
            </CardTitle>
            <CardDescription>
              Real-time monitoring of restaked validation across chains
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <NetworkStatus 
                name="Ethereum" 
                validators={4826} 
                uptime={99.98} 
                security={92} 
              />
              <NetworkStatus 
                name="Arbitrum" 
                validators={1253} 
                uptime={99.87} 
                security={88} 
              />
              <NetworkStatus 
                name="Optimism" 
                validators={957} 
                uptime={99.92} 
                security={85} 
              />
              <NetworkStatus 
                name="Base" 
                validators={721} 
                uptime={99.95} 
                security={83} 
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Connect Wallet CTA */}
      {!isConnected && (
        <section className="mt-8">
          <Card className="bg-gradient-to-r from-meta-purple/20 to-meta-blue/20 border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-20" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-gray-300">Connect your wallet to explore the full features of MetaPlayX.</p>
                </div>
                <Button className="meta-button-primary">
                  Connect Wallet
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

// Helper Components
const StatCard = ({ title, value, change, isPositive }: { 
  title: string; 
  value: string; 
  change: string; 
  isPositive: boolean 
}) => (
  <Card className="meta-card">
    <CardContent className="p-6">
      <p className="text-gray-400">{title}</p>
      <div className="flex items-end justify-between mt-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        <span className={`text-sm flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
          <TrendingUp className={`h-4 w-4 ml-1 ${isPositive ? '' : 'transform rotate-180'}`} />
        </span>
      </div>
    </CardContent>
  </Card>
);

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  to, 
  stats 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  to: string; 
  stats: { label: string; value: string }[]
}) => (
  <Card className="meta-card h-full flex flex-col">
    <CardHeader>
      <div className="flex items-center gap-3">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription className="text-gray-300">{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-secondary/50 p-3 rounded-lg">
            <p className="text-gray-400 text-xs">{stat.label}</p>
            <p className="text-lg font-medium">{stat.value}</p>
          </div>
        ))}
      </div>
      <Button asChild variant="link" className="w-full mt-auto text-meta-neon hover:text-meta-neon/80">
        <Link to={to}>
          Explore {title.split(" ")[0]}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const NetworkStatus = ({ 
  name, 
  validators, 
  uptime, 
  security 
}: { 
  name: string; 
  validators: number; 
  uptime: number; 
  security: number 
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center">
          <Layers className="h-4 w-4 mr-1 text-gray-400" />
          {validators.toLocaleString()} validators
        </span>
        <span>{uptime}% uptime</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Progress value={security} className="h-2 bg-white/10" />
      <span className="text-sm font-medium">{security}%</span>
    </div>
  </div>
);

export default Dashboard;
