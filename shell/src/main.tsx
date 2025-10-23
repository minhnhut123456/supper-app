import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// console.log(debounce);

import "./index.css";
import AuthLayout from "./components/auth-layout";
window.__IS_SHELL_ENVIRONMENT__ = true;

const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(<RouterProvider router={router} />);
