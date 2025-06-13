import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { NAV_LINKS } from "../../data/navLinks";

const MobileNav = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Menu */}
      <div className={`fixed z-50 bg-white right-0 left-0 font-montserrat`}>
        {/* Header */}
        <div className="bg-slate-900 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Ace Leadership Hub</h2>
              <p className="text-blue-100 text-sm">Navigate Your Journey</p>
            </div>
            <button
              className="w-10 h-10 border border-white/5 cursor-pointer"
              //   aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faX} className="w-full h-full" />
            </button>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Main Navigation */}
          <nav className="flex-1 py-6">
            <ul className="space-y-2 px-4">
              {NAV_LINKS.map((navLink, index) => {
                const { linkName, linkTo } = navLink;

                return (
                  <li key={index}>
                    {/* Main Navigation Item */}
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
            </ul>
          </nav>

          {/* Quick Actions */}
          <div className="border-t border-gray-200 p-6 space-y-4">
            <a
              href="#"
              className="block w-full bg-blue-50 text-slate-900 text-center py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Take Free Assessment
            </a>

            <a
              href="#"
              className="block w-full bg-slate-900/90 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              📞 Book Discovery Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
