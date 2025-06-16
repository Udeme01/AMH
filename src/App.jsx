import { RouterProvider, createBrowserRouter } from "react-router";

import Root from "./pages/Root";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Programs from "./pages/Programs";
import LMSPortal from "./pages/LMSPortal";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Partnerships from "./pages/Partnerships";
import BlogDetail from "./pages/BlogDetails";

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
          path: "programs",
          element: <Programs />,
        },
        {
          path: "lms-portal",
          element: <LMSPortal />,
        },
        {
          path: "blog",
          element: <Blog />,
          children: [
            {
              path: ":blogId",
              id: "blog-detail",
              element: <BlogDetail />,
            },
          ],
        },

        {
          path: "events",
          element: <Events />,
        },
        {
          path: "testimonials",
          element: <Testimonials />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "partnership",
          element: <Partnerships />,
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
