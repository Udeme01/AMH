import { Link } from "react-router";
import { NAV_LINKS } from "../../data/navLinks";

const MobileNav = ({ isOpen }) => {
  if (!isOpen) return null;

  // className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"

  // className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"

  return (
    <section className="bg-black0 backdrop:blur-sm z-50 fixed top-0 right-0 bottom-0 left-0">
      <nav className="fixed top-20 right-0 left-0 bottom-0 bg-white overflow-y-auto">
        <ul>
          {NAV_LINKS.map((navLink, index) => {
            const { linkName, linkTo } = navLink;

            return (
              <li key={index}>
                <button className="w-full h-full flex items-center justify-between p-3 text-left text-slate-900 rounded-lg transition-colors font-medium">
                  <Link
                    to={linkTo}
                    className="flex items-center space-x-3 px-3"
                  >
                    {linkName}
                  </Link>
                </button>
              </li>
            );
          })}
          <ol className="border-t border-gray-200 p-6 space-y-4">
            <button
              href="#"
              className="block w-full bg-blue-50 text-slate-900 text-center py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Take Free Assessment
            </button>

            <button
              href="#"
              className="block w-full bg-slate-900/90 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              📞 Book Discovery Call
            </button>
          </ol>
        </ul>
      </nav>
    </section>
  );
};

export default MobileNav;
