import { RouterProvider, createBrowserRouter } from "react-router";

import Homepage from "./pages/Homepage";
import Root from "./pages/Root";

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
