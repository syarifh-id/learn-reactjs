import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Components from "./Components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Components></Components>
    <App></App>
  </React.StrictMode>
);
