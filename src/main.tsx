import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppToaster } from "./components/toast/AppToaster";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <AppToaster />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
