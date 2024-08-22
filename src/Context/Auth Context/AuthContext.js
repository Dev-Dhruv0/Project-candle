import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {},
});

// Provider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if token exists in localStorage on initial load
        // const token = localStorage.getItem('token');
        // const userData = localStorage.getItem('user');
        // if (token) {
            // setIsAuthenticated(true);
            // setUser(JSON.parse(userData));
        // }
    }, []);

    const login = (token, userData) => {
        
        // Store token in localStorage
        localStorage.setItem('token', token);
        // localStorage.setItem('user', JSON.stringify(userData));

        // Update authentication state
        setIsAuthenticated(true);
        // setUser(userData);
    };

    const logout = () => {
        // Remove token from localStorage
        localStorage.removeItem('token');
        // localStorage.removeItem('user');
        // Update authentication state
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);