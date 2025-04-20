
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="h-24 w-24 bg-gradient-to-r from-meta-purple to-meta-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
          <span className="text-6xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 meta-gradient">Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="meta-button-primary">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
