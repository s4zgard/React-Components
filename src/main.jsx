import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { NavigationProvider } from "./context/navigation";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationProvider>
);
