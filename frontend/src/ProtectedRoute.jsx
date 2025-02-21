import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/pages/auth/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Wait for session check
  return user ? <Outlet /> : <Navigate to="/auth/sign-in" replace />;
};

export default ProtectedRoute;