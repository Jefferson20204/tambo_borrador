import { createBrowserRouter } from "react-router-dom";
import AuthenticationWrapper from "./pages/AuthenticationWrapper";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Account from "./pages/Auth/Account/Account";
import Profile from "./pages/Auth/Account/Profile";
import Settings from "./pages/Auth/Account/Settings";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import ForgotPassword from "./pages/Auth/Login/ForgotPassword";
import ResetPassword from "./pages/Auth/Login/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        index: true, // Esto hace que sea la ruta raíz
        element: <Home />,
      },
      {
        path: "/account-details/",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      // Aquí puedes añadir más rutas protegidas
    ],
  },

  {
    path: "/v1/",
    element: <AuthenticationWrapper />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },

  {
    path: "/oauth2/callback",
    element: <OAuth2LoginCallback />,
  },
]);
