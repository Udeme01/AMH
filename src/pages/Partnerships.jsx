import { useState, useEffect, useRef } from "react";
import { benefitsData } from "../data/partnershipData";
import { partnersData } from "../data/partnershipData";
import { partnershipTiers } from "../data/partnershipData";

const Partnership = () => {
  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    email: "",
    partnershipType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0) scale(1)";
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px) scale(0.95)";
      el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.organization || !formData.name || !formData.email) {
      alert("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Partnership inquiry submitted successfully! Our team will contact you within 24 hours to discuss next steps."
      );
      setFormData({
        organization: "",
        name: "",
        email: "",
        partnershipType: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap");

        .font-sans {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
         {
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
          );
          animation: move 20s linear infinite;
        }

        @keyframes move {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .dots-pattern {
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><rect width="1" height="1" fill="white" opacity="0.1"/></svg>')
            repeat;
          animation: float 10s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .benefit-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .benefit-card:hover {
          transform: scale(1.02);
          z-index: 10;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .benefit-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s;
        }

        .benefit-card:hover::before {
          left: 100%;
        }

        .type-card:hover {
          transform: translateY(-8px);
          box-shadow: 20px 20px 0 #000000;
        }

        .partner-logo::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ffffff;
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .partner-logo:hover::before {
          transform: translateX(0);
        }

        .btn-slide::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #000000;
          transition: left 0.4s ease;
          z-index: 1;
        }

        .btn-slide:hover::before {
          left: 0;
        }

        .btn-slide span {
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-[url('/assets/images/gather.avif')] bg-cover bg-no-repeat bg-center text-white py-32 text-center overflow-hidden">
        <div
          className="absolute bg-black/70 top-0 right-0 bottom-0 left-0"
          style={{
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
          }}
        />
        <div
          className="relative z-10 max-w-6xl mx-auto px-8"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-size-display md:text-7xl font-black tracking-display uppercase">
            Partner With Impact
          </h1>
          <p className="text-size-sm md:text-2xl font-light opacity-90 max-w-3xl mx-auto mb-6 tracking-wide">
            Join ACE Leadership Hub in developing the next generation of
            empathetic leaders across law, mediation, and community development.
          </p>
          <button
            onClick={() => scrollToSection("contact-form")}
            className="inline-block px-6 py-4 bg-white text-black font-bold text-lg uppercase tracking-widest border-3 border-white transition-all duration-400 hover:bg-transparent hover:text-white hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            Start Partnership
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-size-3xl md:text-6xl font-bold text-center mb-6 uppercase tracking-display leading-h-display">
            Why Partner
          </h2>
          <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto font-light tracking-body">
            Transform your brand association while creating meaningful impact in
            leadership development and community building.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-20">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll benefit-card bg-white p-16 border border-black relative overflow-hidden hover:bg-black hover:text-white group"
              >
                <div className="text-8xl font-black leading-none mb-6 opacity-10 group-hover:opacity-30 transition-opacity duration-400">
                  {benefit.number}
                </div>
                <h3 className="text-2xl font-bold mb-5 uppercase tracking-wider">
                  {benefit.title}
                </h3>
                <p className="text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 uppercase tracking-tight">
            Our Partners
          </h2>
          <p className="text-center text-xl text-gray-300 mb-20 max-w-3xl mx-auto font-light">
            Trusted by leading organizations committed to empathetic leadership
            development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-20 bg-white p-0.5">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="animate-on-scroll partner-logo bg-black h-36 flex items-center justify-center text-lg font-semibold text-white text-center uppercase tracking-wider relative overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-400 group-hover:text-black px-4">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Types */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 uppercase tracking-tight">
            Partnership Levels
          </h2>
          <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto font-light">
            Choose the partnership tier that aligns with your organizational
            goals and desired impact scope.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {partnershipTiers.map((tier, index) => (
              <div
                key={index}
                className="animate-on-scroll type-card bg-white border-3 border-black overflow-hidden transition-all duration-400 hover:-translate-y-2 relative"
              >
                <div className="bg-black text-white text-center py-12 px-10">
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-wider">
                    {tier.title}
                  </h3>
                  <div className="text-5xl font-black mb-4 leading-none">
                    {tier.price}
                  </div>
                  <p className="text-base opacity-90 font-light">
                    {tier.description}
                  </p>
                </div>
                <div className="bg-white p-10">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-base py-3 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-black mr-4 mt-0.5 flex-shrink-0">
                          ●
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white text-center relative">
        <div className="absolute inset-0 dots-pattern" />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tight">
            Ready to Lead Change?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-16 max-w-3xl mx-auto font-light">
            Let's discuss how a strategic partnership with ACE Leadership Hub
            can amplify your organizational impact while building stronger, more
            empathetic leaders.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center mb-20">
            <button
              onClick={() => scrollToSection("contact-form")}
              className="btn-slide px-10 py-5 bg-white text-black font-bold uppercase tracking-widest border-3 border-white relative overflow-hidden hover:text-white"
            >
              <span>Begin Partnership</span>
            </button>
            <button className="px-10 py-5 bg-transparent text-white font-bold uppercase tracking-widest border-3 border-white transition-all duration-400 hover:bg-white hover:text-black hover:-translate-y-1">
              Download Partnership Kit
            </button>
          </div>

          <div
            className="bg-white text-black p-16 border-3 border-white max-w-3xl mx-auto"
            id="contact-form"
          >
            <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-wider">
              Partnership Inquiry
            </h3>
            <div className="space-y-8">
              <div>
                <label
                  htmlFor="organization"
                  className="block mb-3 font-semibold text-sm uppercase tracking-wider"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-black bg-white text-black text-base transition-all duration-300 focus:bg-black focus:text-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block mb-3 font-semibold text-sm uppercase tracking-wider"
                >
                  Contact Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-black bg-white text-black text-base transition-all duration-300 focus:bg-black focus:text-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 font-semibold text-sm uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-black bg-white text-black text-base transition-all duration-300 focus:bg-black focus:text-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="partnershipType"
                  className="block mb-3 font-semibold text-sm uppercase tracking-wider"
                >
                  Partnership Interest
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-black bg-white text-black text-base transition-all duration-300 focus:bg-black focus:text-white focus:outline-none"
                >
                  <option value="">Select Partnership Level</option>
                  <option value="community">Community Partner</option>
                  <option value="strategic">Strategic Partner</option>
                  <option value="transformational">
                    Transformational Partner
                  </option>
                  <option value="custom">Custom Partnership</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-3 font-semibold text-sm uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your organization's goals and partnership vision..."
                  rows="4"
                  className="w-full px-5 py-4 border-2 border-black bg-white text-black text-base transition-all duration-300 focus:bg-black focus:text-white focus:outline-none resize-vertical"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-5 bg-black text-white border-3 border-black font-bold text-lg uppercase tracking-widest cursor-pointer transition-all duration-400 hover:bg-white hover:text-black hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
