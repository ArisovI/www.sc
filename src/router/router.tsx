import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Admin from "../pages/admin/admin";
import Register from "../pages/auth/register";
import Home from "../pages/client/home";
import Posotion from "../pages/admin/posotion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "positions",
        element: <Posotion />,
      },
    ],
  },
]);
