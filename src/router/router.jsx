import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "../components/layout/Layout";
import IncomePage from "../pages/IncomePage";
import SpendingPage from "../pages/SpendingPage";
import SavingPage from "../pages/SavingPage";
import TodoList from "../pages/TodoList";

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
        path: "/todoList",
        element: <TodoList />,
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
