import React, { useState } from "react";
impo

const DesktopNav = ({ navLinks }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Programs dropdown items
  const programsDropdown = [
    {
      name: "Leadership Intensive",
      href: "/programs/leadership-intensive",
      description: "3-month transformative program",
    },
    {
      name: "Creative Breakthrough",
      href: "/programs/creative-breakthrough",
      description: "6-week creative bootcamp",
    },
    {
      name: "Executive Coaching",
      href: "/programs/executive-coaching",
      description: "1:1 premium coaching",
    },
    {
      name: "Youth Empowerment",
      href: "/programs/youth-empowerment",
      description: "Leadership for next generation",
    },
    {
      name: "Corporate Training",
      href: "/programs/corporate-training",
      description: "Team development programs",
    },
  ];

  // Resources dropdown items
  const resourcesDropdown = [
    {
      name: "Leadership Blog",
      href: "/blog",
      description: "Weekly insights & articles",
    },
    {
      name: "Free Assessment",
      href: "/assessment",
      description: "Discover your leadership style",
    },
    {
      name: "Meditation Library",
      href: "/meditation",
      description: "Guided practices for leaders",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
      description: "Real transformation stories",
    },
    {
      name: "Podcast",
      href: "/podcast",
      description: "Leadership conversations",
    },
  ];

  const handleMouseEnter = (linkName) => {
    if (linkName === "Programs" || linkName === "Resources") {
      setActiveDropdown(linkName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const getDropdownItems = (linkName) => {
    switch (linkName) {
      case "Programs":
        return programsDropdown;
      case "Resources":
        return resourcesDropdown;
      default:
        return [];
    }
  };

  const hasDropdown = (linkName) => {
    return linkName === "Programs" || linkName === "Resources";
  };

  return (
    <nav className="relative">
      <ul className="flex items-center space-x-8">
        {navLinks.map((navLink, index) => {
          const { linkName, linkTo } = navLink;
          const dropdownItems = getDropdownItems(linkName);
          const showDropdown =
            activeDropdown === linkName && dropdownItems.length > 0;

          return (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(linkName)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={hasDropdown(linkName) && "#"}
                className={`flex items-center text-sm text-white hover:text-white/50 font-medium transition-colors py-2 cursor-pointer ${
                  showDropdown ? "text-blue-600" : ""
                }`}
                onClick={(e) => hasDropdown(linkName) && e.preventDefault()}
              >
                <span>{linkName}</span>
                {hasDropdown(linkName) && (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50 mt-2">
                  <div className="px-4 pb-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">{linkName}</h3>
                    <p className="text-sm text-gray-600">
                      {linkName === "Programs"
                        ? "Choose your transformation journey"
                        : "Free resources for leaders"}
                    </p>
                  </div>

                  <div className="py-2">
                    {dropdownItems.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        // href={item.href}
                        href="#"
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="px-4 pt-2 border-t border-gray-100">
                    <a
                      href={linkName === "#" ? "#" : "#"}
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all {linkName.toLowerCase()}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Speaking Badge */}
      <div className="absolute -top-5 -right-4">
        <div className="bg-white/50 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
          Available for Speaking
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
