import { Navigate } from "react-router-dom";
import { useAuth } from "../../logic/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  let { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
