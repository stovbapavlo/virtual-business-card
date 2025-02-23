import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

console.log("Main.tsx загружено");

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Root element знайдено");
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element не знайдено");
}
