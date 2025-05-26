import React from "react";
import { footerData } from "../data/footerData";
import { socialLinks } from "../data/socialLinks";
import { NAV_LINKS } from "../data/navLinks";

const Footer = () => {
  return (
    <footer className="bg-blue px-6 py-8 font-montserrat">
      <section className="flex text-left">
        {/* <div className="font-bold text-4xl">
          <span className="block">AMH</span>
        </div> */}
        <div className="text-cloudWhite">
          <h1 className="text-2xl font-bold tracking-wide">
            Ace Mediation Hub
          </h1>
          <p className="text-xs pr-45 mb-8">
            Understanding the rules, Building with clarity, makes you
            unstoppable.
          </p>
        </div>
      </section>
      {/* transformed lives */}
      <section className=" w-full flex flex-col items-center justify-center">
        {footerData.map((data) => {
          const { icon, numbers, textDescription } = data;
          const Icon = icon;
          return (
            <div
              key={numbers}
              className="bg-cream mb-2 px-6 py-8 rounded-md text-center w-full"
            >
              <Icon className="bg-blue text-cloudWhite w-12 h-auto p-2 rounded-md mx-auto" />
              <h2 className="text-blue font-bold text-2xl text-center py-1">
                {numbers}
              </h2>
              <p className="w-full text-md font-regular text-blue font-medium">
                {textDescription}
              </p>
            </div>
          );
        })}
      </section>
      {/* socials links */}
      <ul className="flex items-center justify-center gap-6 py-3 text-cloudWhite">
        {socialLinks.map((socialLink, index) => {
          const { icon } = socialLink;
          const Icon = icon;
          return (
            <li key={index} className="bg-cloudWhite px-2 py-2 rounded-md">
              <a href="#" className="text-blue">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
      {/* quick links */}
      <section className="mt-6 mb-6">
        <nav>
          <h2 className="text-lg font-bold text-cloudWhite">Quick Links</h2>
          {NAV_LINKS.map((navLink) => {
            const { linkName, linkTo } = navLink;
            return (
              <ul className="w-fit my-3 px-2">
                <li>
                  <a href={linkTo} className="text-cloudWhite text-sm">
                    {linkName}
                  </a>
                </li>
              </ul>
            );
          })}
        </nav>
      </section>
      <hr className="text-cloudWhite" />
      <p className="text-center text-cloudWhite mt-6">Copyright &copy; 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
