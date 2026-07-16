import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth } = useContext(AuthContext)

  // null = check not done yet; show loading so we don't flash-redirect a logged-in user.
  if (isAuth === null) return <p className="p-10 text-white">Loading...</p>
  if (isAuth) return <Outlet />
  return <Navigate to="/" replace />
}

export default ProtectedRoute
