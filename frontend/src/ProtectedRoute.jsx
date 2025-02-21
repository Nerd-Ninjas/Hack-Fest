import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./pages/auth/AuthContext"; // Ensure correct path

const ProtectedRoute = () => {
  const { user, loading } = useAuth(); 

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Checking authentication...</p>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/auth/sign-in" replace />;
};

export default ProtectedRoute;
