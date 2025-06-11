import React, { useState } from "react";

const MobileNav = ({ isOpen, onClose, navLinks }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Programs submenu items
  const programsSubmenu = [
    {
      name: "Leadership Intensive",
      href: "/programs/leadership-intensive",
      icon: "🎯",
    },
    {
      name: "Creative Breakthrough",
      href: "/programs/creative-breakthrough",
      icon: "💡",
    },
    {
      name: "Executive Coaching",
      href: "/programs/executive-coaching",
      icon: "👔",
    },
    {
      name: "Youth Empowerment",
      href: "/programs/youth-empowerment",
      icon: "🌟",
    },
    {
      name: "Corporate Training",
      href: "/programs/corporate-training",
      icon: "🏢",
    },
  ];

  // Resources submenu items
  const resourcesSubmenu = [
    { name: "Leadership Blog", href: "/blog", icon: "📝" },
    { name: "Free Assessment", href: "/assessment", icon: "📊" },
    { name: "Meditation Library", href: "/meditation", icon: "🧘" },
    { name: "Case Studies", href: "/case-studies", icon: "📚" },
    { name: "Podcast", href: "/podcast", icon: "🎧" },
  ];

  const getSubmenuItems = (linkName) => {
    switch (linkName) {
      case "Programs":
        return programsSubmenu;
      case "Blog":
        return resourcesSubmenu;
      default:
        return [];
    }
  };

  const hasSubmenu = (linkName) => {
    return linkName === "Programs" || linkName === "Blog";
  };

  const toggleExpanded = (linkName) => {
    setExpandedSection(expandedSection === linkName ? null : linkName);
  };

  const handleLinkClick = (linkName, linkTo) => {
    if (hasSubmenu(linkName)) {
      // Only toggle the dropdown, don't navigate or close
      toggleExpanded(linkName);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 top-0 bottom-0 right-0 left-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        // onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 bg-white right-0 left-0 font-montserrat ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Leadership Hub</h2>
              <p className="text-blue-100 text-sm">Navigate Your Journey</p>
            </div>
            <button
              //   onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Main Navigation */}
          <nav className="flex-1 py-6">
            <ul className="space-y-2 px-4">
              {navLinks.map((navLink, index) => {
                const { linkName, linkTo } = navLink;
                const submenuItems = getSubmenuItems(linkName);
                const isExpanded = expandedSection === linkName;
                const hasSubItems = hasSubmenu(linkName);

                return (
                  <li key={index}>
                    {/* Main Navigation Item */}
                    <button className="w-full flex items-center justify-between p-3 text-left text-slate-900 rounded-lg transition-colors font-medium">
                      <span className="flex items-center space-x-3">
                        <span className="text-lg">
                          {linkName === "Home"}
                          {linkName === "About"}
                          {linkName === "Speaking"}
                          {linkName === "Programs"}
                          {linkName === "Blog"}
                          {linkName === "Contact"}
                        </span>
                        <span>{linkName}</span>
                      </span>
                    </button>

                    {/* Submenu */}
                    {hasSubItems && isExpanded && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 border">
                        {submenuItems.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            // onClick={onClose}
                            className="flex items-center space-x-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          >
                            {/* <span className="text-base">{item.icon}</span> */}
                            <span className="text-sm">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
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
