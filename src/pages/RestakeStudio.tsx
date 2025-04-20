
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWallet } from "@/context/WalletContext";
import { useToast } from "@/components/ui/use-toast";
import {
  Users,
  Shield,
  GanttChart,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  PlusCircle,
  ThumbsUp,
  ThumbsDown,
  FileCheck,
  GitFork,
  Blocks
} from "lucide-react";

// Mock projects data
const projects = [
  {
    id: 1,
    name: "ETHRacer: Blockchain Racing Game",
    description: "A high-speed racing game built on EVM chains where cars are NFTs secured by restaking",
    category: "Gaming",
    stage: "Development",
    fundingTarget: 125000,
    fundingRaised: 87500,
    votes: 348,
    team: "Speed Labs",
    created: "March 10, 2023",
    tags: ["Gaming", "NFT", "Racing"],
    milestones: [
      { name: "Concept & Design", complete: true },
      { name: "Alpha Prototype", complete: true },
      { name: "Beta Testing", complete: false },
      { name: "Mainnet Launch", complete: false }
    ]
  },
  {
    id: 2,
    name: "VerifyChain: Business Credential Verification",
    description: "Business credential verification service secured by restaking, targeting enterprise clients",
    category: "Enterprise",
    stage: "Live",
    fundingTarget: 200000,
    fundingRaised: 200000,
    votes: 512,
    team: "Trust Networks",
    created: "January 5, 2023",
    tags: ["Enterprise", "Identity", "Verification"],
    milestones: [
      { name: "Concept & Design", complete: true },
      { name: "MVP Development", complete: true },
      { name: "Enterprise Testing", complete: true },
      { name: "Public Launch", complete: true }
    ]
  },
  {
    id: 3,
    name: "DataGuard: Privacy-Preserving Analytics",
    description: "Zero-knowledge analytics platform secured by AVS for sensitive gaming data",
    category: "Infrastructure",
    stage: "Proposal",
    fundingTarget: 175000,
    fundingRaised: 35000,
    votes: 189,
    team: "ZK Labs",
    created: "April 2, 2023",
    tags: ["Privacy", "Analytics", "Gaming"],
    milestones: [
      { name: "Research Paper", complete: true },
      { name: "Prototype", complete: false },
      { name: "Security Audit", complete: false },
      { name: "Public Beta", complete: false }
    ]
  },
  {
    id: 4,
    name: "MetaLocker: Cross-Game Inventory System",
    description: "Universal inventory system allowing items to be used across multiple compatible games",
    category: "Gaming",
    stage: "Development",
    fundingTarget: 150000,
    fundingRaised: 92000,
    votes: 423,
    team: "Omni Gaming Collective",
    created: "February 18, 2023",
    tags: ["Gaming", "Inventory", "Interoperability"],
    milestones: [
      { name: "Concept & Design", complete: true },
      { name: "Core Protocol", complete: true },
      { name: "Partner Integration", complete: false },
      { name: "Public Launch", complete: false }
    ]
  },
  {
    id: 5,
    name: "ChainGuard: Game Asset Insurance",
    description: "Insurance protocol for high-value in-game assets, backed by restaking collateral",
    category: "DeFi",
    stage: "Proposal",
    fundingTarget: 225000,
    fundingRaised: 45000,
    votes: 287,
    team: "Secure Finance",
    created: "March 25, 2023",
    tags: ["Insurance", "DeFi", "Gaming"],
    milestones: [
      { name: "Whitepaper", complete: true },
      { name: "Risk Model", complete: false },
      { name: "Smart Contracts", complete: false },
      { name: "Mainnet Launch", complete: false }
    ]
  }
];

const RestakeStudio = () => {
  const { isConnected } = useWallet();
  const { toast } = useToast();
  const [projectFilter, setProjectFilter] = useState("all");
  const [projectSubmitOpen, setProjectSubmitOpen] = useState(false);
  
  // Filter projects based on selection
  const filteredProjects = projectFilter === "all" 
    ? projects 
    : projects.filter(project => project.stage.toLowerCase() === projectFilter);

  const voteForProject = (projectId: number, isUpvote: boolean) => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to vote for projects",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: isUpvote ? "Upvoted project" : "Downvoted project",
      description: `Your vote has been recorded for project #${projectId}`,
    });
  };

  const submitProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to submit a project",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Project submitted successfully",
      description: "Your project will be reviewed by the DAO",
    });
    
    setProjectSubmitOpen(false);
  };

  const fundProject = (projectId: number) => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to fund this project",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Funding initiated",
      description: "Please confirm the transaction in your wallet",
    });
    
    // Here we would handle the actual funding logic with web3
    setTimeout(() => {
      toast({
        title: "Project funded",
        description: "Your contribution has been recorded",
      });
    }, 2000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Gaming":
        return "bg-meta-purple/20 text-meta-purple border-meta-purple/30";
      case "Enterprise":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Infrastructure":
        return "bg-meta-cyan/20 text-meta-cyan border-meta-cyan/30";
      case "DeFi":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Proposal":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Live":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-6">
        <h1 className="text-3xl font-bold meta-gradient">RestakeDAO Studio</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A DAO that incubates micro-AVSs—anyone can submit a module or app to be secured by restaked assets. 
          The DAO funds and governs promising projects that enhance the ecosystem.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Total Projects</p>
              <GanttChart className="h-5 w-5 text-meta-purple" />
            </div>
            <h3 className="text-2xl font-bold mt-2">27</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Funds Allocated</p>
              <TrendingUp className="h-5 w-5 text-meta-blue" />
            </div>
            <h3 className="text-2xl font-bold mt-2">$3.4M</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Active AVSs</p>
              <Shield className="h-5 w-5 text-meta-cyan" />
            </div>
            <h3 className="text-2xl font-bold mt-2">12</h3>
          </CardContent>
        </Card>

        <Card className="meta-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">DAO Members</p>
              <Users className="h-5 w-5 text-meta-green" />
            </div>
            <h3 className="text-2xl font-bold mt-2">4,382</h3>
          </CardContent>
        </Card>
      </section>

      {/* Projects List */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Tabs 
              defaultValue="all" 
              className="w-full sm:w-auto"
              onValueChange={setProjectFilter}
            >
              <TabsList className="grid grid-cols-3 w-full sm:w-auto bg-secondary/50">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="proposal">Proposals</TabsTrigger>
                <TabsTrigger value="development">In Development</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Dialog open={projectSubmitOpen} onOpenChange={setProjectSubmitOpen}>
              <DialogTrigger asChild>
                <Button className="meta-button-primary w-full sm:w-auto">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Submit Project
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-meta-dark border-white/10 text-white max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Submit New Project</DialogTitle>
                  <DialogDescription>
                    Share your idea to be secured by restaked assets and potentially receive funding from the DAO.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={submitProject} className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Name</label>
                      <Input className="meta-input" placeholder="Enter project name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <select className="meta-input w-full bg-secondary" required>
                        <option value="">Select category</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="DeFi">DeFi</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Description</label>
                    <Textarea 
                      className="meta-input min-h-[120px]" 
                      placeholder="Describe your project and how it will utilize restaking technology..." 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Funding Target (USD)</label>
                    <Input className="meta-input" type="number" placeholder="e.g. 100000" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Team Information</label>
                    <Textarea 
                      className="meta-input" 
                      placeholder="Describe your team, experience, and relevant background..." 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Milestones</label>
                    <Textarea 
                      className="meta-input" 
                      placeholder="List key project milestones and timeline..." 
                      required
                    />
                  </div>
                  
                  <DialogFooter className="pt-4">
                    <Button type="button" variant="outline" className="border-white/10" onClick={() => setProjectSubmitOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="meta-button-primary">
                      Submit Project
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="meta-panel overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle>{project.name}</CardTitle>
                      <Badge variant="outline" className={`${getCategoryColor(project.category)} border`}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className={`${getStageColor(project.stage)} border`}>
                        {project.stage}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white/10 hover:bg-white/5"
                      onClick={() => voteForProject(project.id, true)}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>Upvote</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/10 hover:bg-white/5"
                      onClick={() => voteForProject(project.id, false)}
                    >
                      <ThumbsDown className="h-4 w-4 mr-1" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-400">Funding Progress</div>
                        <div className="text-sm font-medium">
                          ${project.fundingRaised.toLocaleString()} / ${project.fundingTarget.toLocaleString()}
                        </div>
                      </div>
                      <Progress 
                        value={(project.fundingRaised / project.fundingTarget) * 100} 
                        className="h-2 bg-white/10" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-gray-400">Team</div>
                        <div className="font-medium">{project.team}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Created</div>
                        <div className="font-medium">{project.created}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Votes</div>
                        <div className="font-medium">{project.votes}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Tags</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.tags.map((tag, index) => (
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
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <GitFork className="h-4 w-4 text-meta-purple" />
                      Project Milestones
                    </h4>
                    <div className="space-y-2">
                      {project.milestones.map((milestone, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className={`h-4 w-4 rounded-full flex items-center justify-center ${
                            milestone.complete ? 'bg-meta-green/20 text-meta-green' : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {milestone.complete && <FileCheck className="h-3 w-3" />}
                          </div>
                          <span className={milestone.complete ? 'text-white' : 'text-gray-400'}>
                            {milestone.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="meta-button-primary w-full mt-2"
                      onClick={() => fundProject(project.id)}
                    >
                      Fund This Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section>
        <Card className="meta-panel bg-gradient-to-r from-meta-purple/10 to-meta-blue/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 z-0" />
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-meta-purple" />
              DAO Governance
            </CardTitle>
            <CardDescription>
              Participate in the governance of RestakeDAO and help shape the future of restaking technology
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Active Proposals</h3>
                <div className="space-y-3">
                  <ProposalItem 
                    title="RIP-32: New Gaming AVS Framework" 
                    ends="2 days" 
                    votes={423}
                    support={72}
                  />
                  <ProposalItem 
                    title="RIP-33: Increase Funding Pool" 
                    ends="4 days" 
                    votes={287}
                    support={64}
                  />
                  <ProposalItem 
                    title="RIP-34: New Security Requirements" 
                    ends="1 week" 
                    votes={195}
                    support={81}
                  />
                </div>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
                  View All Proposals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Upcoming Events</h3>
                <div className="space-y-3">
                  <EventItem 
                    title="Monthly DAO Call" 
                    date="April 25, 2023"
                    time="3:00 PM UTC"
                    attendees={187}
                  />
                  <EventItem 
                    title="Developer Workshop: Building AVSs" 
                    date="April 29, 2023"
                    time="5:00 PM UTC"
                    attendees={134}
                  />
                  <EventItem 
                    title="Security Review Session" 
                    date="May 5, 2023"
                    time="2:00 PM UTC"
                    attendees={92}
                  />
                </div>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
                  View Calendar
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/5 pt-4 relative z-10">
            <div className="w-full flex flex-col sm:flex-row justify-between gap-4 items-center">
              <p className="text-gray-300">Join the DAO to participate in governance and receive funding</p>
              <Button className="meta-button-primary sm:w-auto w-full">
                Join RestakeDAO
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl font-bold mb-4">How RestakeDAO Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="meta-card h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-meta-purple/20 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-meta-purple" />
              </div>
              <CardTitle>1. Submit Your Project</CardTitle>
              <CardDescription className="text-gray-300">
                Share your idea for a module or application that can be secured by restaked assets.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-gray-300">
              <p>
                Projects should enhance the restaked ecosystem by providing unique value through new AVSs (Actively
                Validated Services), game integrations, or infrastructure improvements.
              </p>
            </CardContent>
          </Card>
          
          <Card className="meta-card h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-meta-blue/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-meta-blue" />
              </div>
              <CardTitle>2. DAO Voting</CardTitle>
              <CardDescription className="text-gray-300">
                The RestakeDAO community evaluates and votes on submitted projects based on merit and impact.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-gray-300">
              <p>
                Projects are evaluated on technical feasibility, team experience, market opportunity, 
                and contribution to the overall ecosystem. Voting power is proportional to DAO token holdings.
              </p>
            </CardContent>
          </Card>
          
          <Card className="meta-card h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-meta-green/20 flex items-center justify-center mb-4">
                <Blocks className="h-6 w-6 text-meta-green" />
              </div>
              <CardTitle>3. Funding & Implementation</CardTitle>
              <CardDescription className="text-gray-300">
                Approved projects receive funding, technical support, and restaking infrastructure.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-gray-300">
              <p>
                Funding is typically released in milestones based on project progress. The DAO provides technical 
                resources and helps integrate projects with existing restaking infrastructure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Helper components
const ProposalItem = ({ title, ends, votes, support }: { 
  title: string; 
  ends: string; 
  votes: number;
  support: number;
}) => (
  <div className="p-4 bg-secondary/30 rounded-lg">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
          <Clock className="h-3 w-3" />
          <span>Ends in {ends}</span>
          <span>•</span>
          <span>{votes} votes</span>
        </div>
      </div>
      <Badge variant="outline" className={`${
        support >= 75 ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
        support >= 50 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
        'bg-red-500/20 text-red-400 border-red-500/30'
      }`}>
        {support}% Support
      </Badge>
    </div>
    <div className="mt-2">
      <Progress value={support} className="h-1 bg-white/10" />
    </div>
  </div>
);

const EventItem = ({ title, date, time, attendees }: {
  title: string;
  date: string;
  time: string;
  attendees: number;
}) => (
  <div className="p-4 bg-secondary/30 rounded-lg">
    <h4 className="font-medium text-sm">{title}</h4>
    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
      <Calendar className="h-3 w-3" />
      <span>{date}</span>
      <span>•</span>
      <span>{time}</span>
    </div>
    <div className="flex items-center justify-between mt-2">
      <div className="text-xs text-gray-400">{attendees} attending</div>
      <Button variant="link" className="text-xs p-0 h-auto text-meta-neon">
        Add to Calendar
        <ArrowUpRight className="ml-1 h-3 w-3" />
      </Button>
    </div>
  </div>
);

export default RestakeStudio;
