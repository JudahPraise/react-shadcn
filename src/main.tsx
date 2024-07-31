import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Product from "@/pages/Product/Product";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFoundPage from "@/pages/NotFoundPage";
import Login from "@/pages/Auth/Login";
import Layout from "@/components/Layout";
import ProtectRoute from "@/components/ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: (
          <ProtectRoute>
            <Layout />
          </ProtectRoute>
        ),
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/products",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
