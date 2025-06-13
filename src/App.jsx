import { RouterProvider, createBrowserRouter } from "react-router";

import Homepage from "./pages/Homepage";
import Root from "./pages/Root";
import About from "./pages/About";

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
        // {
        //   path: "impact",
        //   element: <Impact />,
        // },
        // {
        //   path: "contact",
        //   element: <Contact />,
        // },
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
