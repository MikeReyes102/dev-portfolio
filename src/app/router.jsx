import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

export default router;