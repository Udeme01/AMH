import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  User,
  ArrowRight,
  Play,
  ExternalLink,
} from "lucide-react";
import { upcomingEvents } from "../data/events";
import { pastEvents } from "../data/events";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState(null);
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
              entry.target.style.transform = "translateY(0)";
            }, index * 150);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-fade-up");
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const handleRegister = (event) => {
    alert(
      `Registration opened for "${event.title}". You'll be redirected to the registration portal.`
    );
  };

  return (
    <div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        .font-sans {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
        }

        .status-badge {
          background: linear-gradient(45deg, #000000, #333333);
        }

        .glass-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .floating-dots {
          background-image: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-[url('/assets/images/gather.avif')] bg-cover bg-no-repeat bg-center text-white min-h-[50vh] lg:min-h-[70vh] relative overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/70" />
        <div
          className="max-w-6xl mx-auto px-8 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full py-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-size-display md:text-5xl font-black mb-1 tracking-display">
            Events & Workshops
          </h1>
          <p className="text-size-sm md:text-size-lg font-light opacity-90 max-w-3xl mx-auto tracking-wide">
            Join our community of emerging leaders through transformative
            learning experiences
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`py-6 px-2 text-lg font-semibold border-b-2 transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`py-6 px-2 text-lg font-semibold border-b-2 transition-all duration-300 ${
                activeTab === "past"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-12">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-fade-up card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12">
                      <div className="flex items-center justify-between mb-4">
                        <span className="status-badge text-white px-4 py-2 rounded-full text-sm font-medium">
                          {event.status === "Early Bird"
                            ? "Early Bird Available"
                            : event.type}
                        </span>
                        <span className="text-2xl font-bold text-black">
                          {event.price}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                        {event.title}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-600">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">
                            {formatDate(event.date)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5" />
                          <span>
                            {formatTime(event.time)} • {event.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5" />
                          <span>{event.capacity}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="mb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={event.speaker.image}
                            alt={event.speaker.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">
                              {event.speaker.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {event.speaker.title}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold mb-3 text-gray-900">
                          What to expect:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          onClick={() => handleRegister(event)}
                          className="bg-black text-white px-8 py-3 rounded-lg font-semibold transition duration-500 flex items-center space-x-2 cursor-pointer hover:scale-105"
                        >
                          <span>Register Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setSelectedEvent(
                              selectedEvent === event.id ? null : event.id
                            )
                          }
                          className="border border-black/30 text-gray-700 px-6 py-3 rounded-lg font-medium transition duration-500 cursor-pointer hover:scale-105"
                        >
                          Learn More
                        </button>
                      </div>

                      {selectedEvent === event.id && (
                        <div className="mt-8 p-6 bg-gray-50 rounded-xl animate-fade-up">
                          <h4 className="font-semibold mb-4 text-gray-900">
                            Additional Details
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <strong>Prerequisites:</strong> None required
                            </div>
                            <div>
                              <strong>Materials:</strong> Provided
                            </div>
                            <div>
                              <strong>Certificate:</strong> Available upon
                              completion
                            </div>
                            <div>
                              <strong>Contact:</strong>{" "}
                              events@aceleadershiphub.com
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {activeTab === "past" && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Celebrating the moments that shaped our community of empathetic
                leaders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-fade-up card-hover bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.attendees} attended
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>

                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      {event.title}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>

                    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                      {event.media.highlights}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <span>{event.media.photos} photos</span>
                        <span>{event.media.videos} videos</span>
                      </div>
                      <button className="text-black hover:text-gray-600 transition-colors duration-300">
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold transition duration-500 flex items-center space-x-2 mx-auto cursor-pointer hover:scale-105">
                <span>View All Past Events</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-size-2xl font-bold mb-4">Never Miss an Event</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Get early access to registrations and exclusive updates on our
            latest workshops and events
          </p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-black font-medium focus:outline-none focus:border-none focus:ring-1 focus:ring-black/10"
            />
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold transition duration-500 cursor-pointer hover:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
