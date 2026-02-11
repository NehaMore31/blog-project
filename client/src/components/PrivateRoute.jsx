// Get user data from Redux store
import { useSelector } from "react-redux";

// Outlet → to render child protected routes
// Navigate → to redirect if not logged in
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {

  // Get currentUser from Redux store
  const { currentUser } = useSelector((state) => state.user);

  // If user logged in → allow access
  // If not → redirect to sign-in page
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
