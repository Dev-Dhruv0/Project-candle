import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomeView from "../../Views/Home View/HomeView";
import SignUpValidation from "../../Views/Register View/RegisterView";
// import { FormProvider } from "../../Context/RegisterViewContext/RegisterViewContext";
import ProtectedRoute from "../Protected Route/ProtectedRoute";
import ProfileView from "../../Views/Profile View/ProfileView";
import { AuthProvider } from "../../Context/Auth Context/AuthContext";
import { FormProvider } from "../../Context/RegisterViewContext/RegisterViewContext";
import LoginValidation from "../../Views/Login View/LoginView";
import DisplaySignupData from "../../DisplaySignupData";

const AppRouter = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
          <AuthProvider>
            <Navbar />
          </AuthProvider>,
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
                <LoginValidation />
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
              // <ProtectedRoute>
                <DisplaySignupData />
              // </ProtectedRoute>
            )
          }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
