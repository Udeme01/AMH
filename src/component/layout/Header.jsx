import React, { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

// Mock navigation data - replace with your actual data
const NAV_LINKS = [
  { linkName: "Home", linkTo: "/" },
  { linkName: "About", linkTo: "/about" },
  { linkName: "Speaking", linkTo: "/speaking" },
  { linkName: "Programs", linkTo: "/programs" },
  { linkName: "Blog", linkTo: "/blog" },
  { linkName: "Contact", linkTo: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-nav-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat ${
          isScrolled
            ? "bg-slate-900/50 backdrop-blur-md shadow-lg"
            : "bg-slate-900 py-2"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <div className="">
                  <h1 className="text-md font-bold text-white">
                    Ace Leadership Hub
                  </h1>
                  <p className="text-[10px] text-white/60">
                    Authentic • Mindful • Empowering
                  </p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <DesktopNav navLinks={NAV_LINKS} />
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#"
                className="text-white hover:text-white/50 font-medium text-sm transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="bg-white hover:bg-white/50 text-slate-900 text-[10px] px-4 py-2 rounded-full font-semibold transition-all hover:scale-95 shadow-md"
              >
                Book Discovery Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden mobile-nav-container">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                aria-label="Toggle menu"
              >
                <Hamburger
                  toggled={isMenuOpen}
                  size={24}
                  duration={0.3}
                  color={isMenuOpen ? "#3B82F6" : "#ffffff"}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Top Banner (Optional) */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
          <p>
            🎯 <strong>New Program Launch:</strong> Leadership Intensive - Early
            Bird 20% Off!
            <a href="/programs" className="underline ml-2 hover:text-blue-200">
              Learn More →
            </a>
          </p>
        </div> */}
      </header>
      {/* Mobile Navigation Overlay */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
      {/* Spacer to prevent content from hiding behind fixed header */}
      {/* <div className="h-16 lg:h-20"></div> */}
      {/* <div className="h-10"></div> Additional space for banner */}
    </>
  );
};

export default Header;
