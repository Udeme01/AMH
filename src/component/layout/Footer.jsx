import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faFacebook, platform: "Facebook", url: "#" },
  { icon: faTwitter, platform: "Twitter", url: "#" },
  { icon: faLinkedinIn, platform: "LinkedIn", url: "#" },
  { icon: faInstagram, platform: "Instagram", url: "#" },
  { icon: faYoutube, platform: "YouTube", url: "#" },
];

const NAV_LINKS = [
  { linkName: "Home", linkTo: "/" },
  { linkName: "About", linkTo: "/about" },
  { linkName: "Speaking", linkTo: "/speaking" },
  { linkName: "Programs", linkTo: "/programs" },
  { linkName: "Blog", linkTo: "/blog" },
  { linkName: "Contact", linkTo: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-wide mb-3">
                Leadership & Empowerment Hub
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Transforming professionals, creatives, and community leaders
                through authentic leadership development and mindful practices.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:hello@leadershiphub.com"
                  className="hover:text-white transition-colors"
                >
                  aceleadershiphub@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-2">
                {NAV_LINKS.map((navLink, index) => (
                  <li key={index}>
                    <a
                      href={navLink.linkTo}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {navLink.linkName}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Leadership Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Executive Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Youth Empowerment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Creative Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Speaking Engagements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Free Leadership Assessment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Meditation Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Leadership Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-2 text-white">Stay Updated</h4>
              <p className="text-xs text-gray-300 mb-3">
                Get weekly leadership insights
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                  aria-label={social.platform}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>

            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-300 mb-1">
                Follow for daily leadership insights
              </p>
              <div className="flex gap-4 text-xs text-gray-400">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
            <div>
              <p>
                &copy; {currentYear} Ace Leadership & Empowerment Hub. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-slate-900/90 text-white p-3 w-12 h-12 rounded-full shadow-2xl transition flex items-center justify-center hover:scale-90"
        aria-label="Back to top"
      >
        <span className="text-3xl text-center">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
