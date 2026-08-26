import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Clear stale dev theme overrides so index.css sky palette applies
try {
  localStorage.removeItem("tutornext-dev-theme");
} catch {
  // ignore
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
