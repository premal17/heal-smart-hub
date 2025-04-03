
import { useState, useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Loader2Icon } from "lucide-react";

const AppLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2Icon className="h-10 w-10 text-clinic-primary animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePath={activePath} />
        <main className="flex-1 overflow-y-auto bg-clinic-background p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
