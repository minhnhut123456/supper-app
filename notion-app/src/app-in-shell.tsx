import { useRoutes } from "react-router";
import Home from "./components/pages/home";

function AppInShell() {
  const element = useRoutes([
    {
      path: "/",
      index: true,
      Component: Home,
    },
  ]);
  return element;
}

export default AppInShell;
