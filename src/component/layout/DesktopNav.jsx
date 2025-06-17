import { NAV_LINKS } from "../../data/navLinks";
import { Link } from "react-router";

const DesktopNav = () => {
  return (
    <nav className="relative">
      <ul className="flex items-center justify-evenly w-3xl">
        {NAV_LINKS.map((navLink, index) => {
          const { linkName, linkTo } = navLink;

          return (
            <li key={index} className="relative px-2">
              <Link
                to={linkTo}
                className={`flex items-center text-size-sm text-white hover:text-white/50 font-medium transition-colors py-2 cursor-pointer`}
              >
                {linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
