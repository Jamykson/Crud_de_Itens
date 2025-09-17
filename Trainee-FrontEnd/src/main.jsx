import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./views/HomePage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import InventoryPage from "./views/InventoryPage.jsx";
import MovimentacaoPage from "./views/MovimentacaoPage.jsx";
import AtencaoPage from "./views/AtencaoPage.jsx";
import MovesPage from "./views/MovesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
  },
  {
    path: "/movimentacao",
    element: <MovimentacaoPage />,
  },
  {
    path: "/atencao",
    element: <AtencaoPage />,
  },
  {
    path: "/historico",
    element: <MovesPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
