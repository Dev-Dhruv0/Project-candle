import { Navigate } from "react-router-dom"
import { useAuth } from "../../Context/Auth Context/AuthContext";

const ProtectedRoute = ({ children }) => {
    
    const { isAuthenticated } = useAuth();

    // Check if the user is authenticated; if not, redirect to the login/signup page
    return isAuthenticated ? children : <Navigate to="/signup"/>
};

export default ProtectedRoute;