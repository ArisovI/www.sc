import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </MantineProvider>
);
