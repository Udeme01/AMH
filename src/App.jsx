import { RouterProvider, createBrowserRouter } from "react-router";

import Homepage from "./pages/Homepage";
import Root from "./pages/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Speaking from "./pages/Speaking";
import Programs from "./pages/Programs";
import Blog from "./pages/Blog";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "speaking",
          element: <Speaking />,
        },
        {
          path: "programs",
          element: <Programs />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
