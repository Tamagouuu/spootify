import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import CoreLayout from "./common/layouts/CoreLayout";
import "./styles/_main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
