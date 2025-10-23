import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotionApp from "./components/pages/notion-app";
// console.log(debounce);

import "./index.css";
import AuthLayout from "./components/auth-layout";
import Home from "./components/pages/home";
import ErrorBoundary from "./components/error-boundary";

window.__IS_SHELL_ENVIRONMENT__ = true;
window.__NOTION_BASE_PATH__ = "/notion-app";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "",
        Component: Home,
        index: true,
      },
      {
        // Important
        path: "notion-app/*",
        Component: NotionApp,
      },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(<RouterProvider router={router} />);
