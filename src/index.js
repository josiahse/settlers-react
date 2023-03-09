import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/errorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path={"/"} errorElement={<ErrorBoundary />} />
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
