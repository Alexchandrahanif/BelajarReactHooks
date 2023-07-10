import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "../components/Layout";
import DetailPage from "../pages/DetailPage";
import IncomePage from "../pages/IncomePage";
import SpendingPage from "../pages/SpendingPage";
import SavingPage from "../pages/SavingPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("authorization")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: () => {
      if (localStorage.getItem("authorization")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("authorization")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      {
        path: "/income",
        element: <IncomePage />,
      },
      {
        path: "/spending",
        element: <SpendingPage />,
      },
      {
        path: "/saving",
        element: <SavingPage />,
      },
    ],
  },
]);

export default router;
