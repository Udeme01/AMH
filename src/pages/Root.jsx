import { Outlet } from "react-router";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import ScrollToTop from "../component/common/ScrollToTop";

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
