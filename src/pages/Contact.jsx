import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Users,
  Mic,
  BookOpen,
  Handshake,
  Building,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  Send,
  Star,
} from "lucide-react";
import { Link } from "react-router";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus(""), 5000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const services = [
    {
      icon: Users,
      title: "Leadership Coaching",
      description: "Transform your authentic leadership style",
      cta: "Book Discovery Call",
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description: "Inspire your audience with powerful insights",
      cta: "Inquire About Speaking",
    },
    {
      icon: BookOpen,
      title: "Workshops & Training",
      description: "Develop your team's leadership capabilities",
      cta: "Request Workshop Info",
    },
    {
      icon: Handshake,
      title: "Mediation Services",
      description: "Navigate conflicts with empathy and clarity",
      cta: "Schedule Consultation",
    },
    {
      icon: Building,
      title: "Corporate Training",
      description: "Elevate your organization's leadership culture",
      cta: "Discuss Corporate Needs",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      text: "ACE Leadership Hub transformed not just my leadership style, but my entire approach to authentic communication. The results were immediate and lasting.",
    },
    {
      name: "Marcus Williams",
      role: "Youth Program Coordinator",
      text: "The mediation training I received has been invaluable in my work with young people. The empathy-based approach creates real connections.",
    },
    {
      name: "Jennifer Rodriguez",
      role: "Marketing Manager",
      text: "The corporate workshop energized our entire team. We've seen a 40% improvement in collaboration and communication effectiveness.",
    },
  ];

  const faqs = [
    {
      question: "What can I expect from my first consultation?",
      answer:
        "Your first consultation is a relaxed, 45-minute conversation where we explore your leadership goals, current challenges, and vision for growth. We'll discuss how our approach aligns with your needs and create a personalized roadmap for your transformation journey.",
    },
    {
      question: "Do you offer virtual sessions?",
      answer:
        "Absolutely! We offer both in-person and virtual sessions to accommodate your schedule and preferences. Our virtual platform provides the same intimate, transformational experience as face-to-face meetings.",
    },
    {
      question: "How long do coaching programs typically last?",
      answer:
        "Programs are customized to your goals. Most clients see significant transformation within 3-6 months, with options for ongoing support. We believe in sustainable change that lasts beyond our time together.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "We offer flexible pricing options including individual sessions, package deals, and corporate rates. During your discovery call, we'll discuss options that fit your budget and goals. Investment in authentic leadership development pays dividends for life.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "Complete confidentiality is fundamental to our practice. All sessions and communications are strictly confidential, creating a safe space for honest exploration and growth. We adhere to professional coaching ethics and standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 font-montserrat">
      {/* Contact Methods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600">
              Choose the way that feels most comfortable for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">
                    Message sent successfully! We'll respond within 24 hours.
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Service Interest</option>
                    <option value="leadership-coaching">
                      Leadership Coaching
                    </option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="workshop">Workshop/Training</option>
                    <option value="mediation">Mediation Services</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your goals and how we can help you achieve them..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-500 flex items-center justify-center gap-2 transform hover:scale-95 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (234) 567-8900</span>
                  </a>
                  <a
                    href="mailto:hello@aceleadershiphub.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>aceleadershiphub@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900 to-green-950 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">
                  WhatsApp for Instant Support
                </h3>
                <p className="mb-4">
                  Get immediate responses to your questions
                </p>
                <Link
                  to="#"
                  title="Ace Leadership Hub"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-500 hover:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <Link
                    to="#"
                    title="facebook"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    f
                  </Link>
                  <Link
                    to="#"
                    title="twitter"
                    className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    t
                  </Link>
                  <Link
                    to="#"
                    title="linkedIn"
                    className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                  >
                    in
                  </Link>
                  <Link
                    to="#"
                    title="instagram"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    ig
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real transformation stories from real leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know to get started
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 mb-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ACE Leadership Hub?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24-Hour Response</h3>
              <p className="text-gray-300">
                We respond to all inquiries within 24 hours, guaranteed.
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Complete Confidentiality
              </h3>
              <p className="text-gray-300">
                Your journey is private and secure with our professional ethics.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certified Expertise</h3>
              <p className="text-gray-300">
                Professional credentials and proven track record of success.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-300">
                95% of clients report significant leadership improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
