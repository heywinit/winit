import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/blog",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
