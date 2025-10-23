import Home from "./components/pages/home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
