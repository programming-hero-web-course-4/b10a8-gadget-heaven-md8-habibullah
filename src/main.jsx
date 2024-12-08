import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "./Component/Root.jsx";
import App from "./App.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} ></RouterProvider>
    {/* <App></App> */}
  </StrictMode>,
);
