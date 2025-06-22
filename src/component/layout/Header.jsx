import { useState, useEffect, useRef } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { Link } from "react-router";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

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
      <header className="bg-slate-900 py-8">
        <div className="h-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="text-size-sm">
              <h1 className="font-semibold text-white leading-h-base">
                Ace Leadership Hub
              </h1>
              <p className="text-size-xs text-white/50">
                Authentic • Mindful • Empowering
              </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <DesktopNav />
            </div>

            {/* Speaking Badge */}
            <div className="absolute top-2 right-6">
              <div className="bg-white/50 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                Available for Speaking
              </div>
            </div>

            <LanguageSwitcher />


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden mobile-nav-container"
              aria-label="Toggle menu"
            >
              <Hamburger
                toggled={isMenuOpen}
                size={20}
                duration={0.7}
                color={isMenuOpen ? "#3B82F6" : "#ffffff"}
              />
            </button>
          </div>
        </div>

        {/* Top Banner (Optional) */}
        {/* <div className="text-white text-center font-light text-size-xs">
          <marquee
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className="w-full cursor-pointer">
              🎯 <strong className="font-medium">New Program Launch:</strong>{" "}
              Leadership Intensive - Early Bird 20% Off!
              <Link to="/" className="underline ml-2 hover:text-blue-200">
                Learn More →
              </Link>
            </p>
          </marquee>
        </div> */}
      </header>
      <MobileNav
        isOpen={isMenuOpen}
        // onClose={() => setIsMenuOpen(false)}
        // navLinks={NAV_LINKS}
      />
    </>
  );
};

export default Header;
