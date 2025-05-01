import { createBrowserRouter } from "react-router-dom";
import AuthenticationWrapper from "./pages/AuthenticationWrapper";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Account from "./pages/Account/Account";
import Profile from "./pages/Account/Profile";
import Settings from "./pages/Account/Settings";
import ForgotPassword from "./pages/Login/ForgotPassword";
import ResetPassword from "./pages/Login/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationWrapper />,
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
    element: <ShopApplicationWrapper />,
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
