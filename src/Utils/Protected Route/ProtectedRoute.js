import { Navigate } from "react-router-dom"
import { useAuth } from "../../Context/Auth Context/AuthContext";

const ProtectedRoute = ({ children }) => {
    
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated,children)

    // Check if the user is authenticated; if not, redirect to the login/signup page
    return isAuthenticated ? children : <Navigate to="/login"/>
    
};

export default ProtectedRoute;