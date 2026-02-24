import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/style.css";
import styles from "./style/styleAngola.module.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
