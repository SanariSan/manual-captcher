import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { GenericProvider } from "context/generic";
import { ToastContainer } from "react-toastify";
import { App } from "./app";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GenericProvider>
      <App />
    </GenericProvider>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      limit={20}
      theme="dark"
    />
  </React.StrictMode>
);
