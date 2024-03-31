import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Contex";
import { ThemeProvider } from "../src/context/theme/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
