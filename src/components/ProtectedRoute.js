import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};