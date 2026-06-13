import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/ui_management/store";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TooltipProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TooltipProvider>
  </BrowserRouter>,
);
