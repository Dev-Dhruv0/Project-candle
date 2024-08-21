import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomeView from "../../Views/Home View/HomeView";
import SignUpValidation from "../../Views/Register View/RegisterView";
// import { FormProvider } from "../../Context/RegisterViewContext/RegisterViewContext";
import ProtectedRoute from "../Protected Route/ProtectedRoute";
import ProfileView from "../../Views/Profile View/ProfileView";
import { useAuth } from "../../Context/Auth Context/AuthContext";
import { FormProvider } from "../../Context/RegisterViewContext/RegisterViewContext";
import LoginValidation from "../../Views/Login View/LoginView";
import DisplaySignupData from "../../DisplaySignupData";

const AppRouter = () => {
  const { setIsAuthenticated} = useAuth();
  // const [isAuthenticated, setIsAutheticated] = useState(false);
  const handleSignIn = ( status ) => {
    setIsAuthenticated(status);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <HomeView />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfileView />
            </ProtectedRoute>
          ),
        },
        {
            path: "/login",
            element: (
              <FormProvider>
                <LoginValidation onSignIn={handleSignIn}/>
              </FormProvider>
            ),
          },
          {
            path: "/signup",
            element: (
            <FormProvider>
              <SignUpValidation/>
              </FormProvider>)
          },
          {
            path: "/signup-data",
            element: (
              <ProtectedRoute>
                <DisplaySignupData />
              </ProtectedRoute>
            )
          }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
