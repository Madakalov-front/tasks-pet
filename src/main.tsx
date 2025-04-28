import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import "./index.css";
import { App } from "@/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* basename="/my-app" */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
