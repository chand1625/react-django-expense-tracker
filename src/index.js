import ReactDOM from "react-dom/client";

import { LoadingContextProvider } from "./store/LoadingContext";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoadingContextProvider>
    <App />
  </LoadingContextProvider>
);
