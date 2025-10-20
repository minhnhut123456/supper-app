import { createRoot } from "react-dom/client";
import App from "./main";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<App />);
}
