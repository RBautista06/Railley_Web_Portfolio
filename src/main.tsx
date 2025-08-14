import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./Pages/Homepage.tsx";
import Projects from "./Pages/ProjectsPage.tsx";
import Editing from "./Pages/EditingPage.tsx";
import About from "./Pages/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/programming",
    element: <Projects />,
  },
  {
    path: "/editing",
    element: <Editing />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
