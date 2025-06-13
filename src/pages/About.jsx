import React, { useState } from "react";
import founder from "/assets/images/ade.jpg";

import {
  Users,
  Target,
  Heart,
  Scale,
  Lightbulb,
  Award,
  ArrowRight,
  Quote,
  Star,
  BookOpen,
  Mic,
  Video,
  Calendar,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { number: "10K+", label: "Lives Transformed", icon: Users },
    { number: "500+", label: "Leaders Mentored", icon: Target },
    { number: "50+", label: "Communities Impacted", icon: Heart },
    { number: "8+", label: "Years of Impact", icon: Award },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Authentic Leadership",
      description:
        "Helping individuals discover and embrace their true leadership identity without compromise.",
    },
    {
      icon: Scale,
      title: "Peace Through Mediation",
      description:
        "Building bridges of understanding and creating sustainable peace in communities and organizations.",
    },
    {
      icon: Lightbulb,
      title: "Creative Empowerment",
      description:
        "Unlocking the creative potential in youth and professionals to drive meaningful innovation.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Fostering collaborative environments where leaders can thrive and create lasting change.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Adeyemi",
      role: "Creative Director, Tech Startup",
      quote:
        "The clarity I gained about my authentic leadership style transformed not just my career, but my entire approach to life.",
      rating: 5,
    },
    {
      name: "Michael Sanwo-Olu",
      role: "Community Leader",
      quote:
        "Learning to speak up without desperation while maintaining empathy - this changed everything in my advocacy work.",
      rating: 5,
    },
    {
      name: "Aisha Kosoko",
      role: "Young Entrepreneur",
      quote:
        "ACE Leadership Hub taught me that being who I am supposed to be is not just enough - it is everything.",
      rating: 5,
    },
  ];

  const offerings = [
    {
      icon: Mic,
      title: "Speaking Engagements",
      description:
        "Transformative keynote speeches for conferences, organizations, and community events.",
    },
    {
      icon: Users,
      title: "Leadership Workshops",
      description:
        "Intensive programs designed to unlock authentic leadership potential in individuals and teams.",
    },
    {
      icon: Scale,
      title: "Mediation Services",
      description:
        "Professional conflict resolution and peace-building services for organizations and communities.",
    },
    {
      icon: BookOpen,
      title: "Mentorship Programs",
      description:
        "One-on-one and group mentoring for emerging leaders, creatives, and change-makers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/images/ade.jpg')] bg-cover bg-center bg-no-repeat pt-40 md:pt-40 pb-12 md:pb-20 lg:pb-32">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-8">
            {/* Image */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden shadow-2xl">
              <img
                src={founder}
                alt="ACE Leadership Hub Founder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                  TRANSFORMATIONAL LEADERSHIP
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-light leading-tight text-slate-900">
                Building{" "}
                <span className="font-semibold text-blue-600">
                  Authentic Leaders
                </span>
                <br />
                Who{" "}
                <span className="font-semibold text-blue-600">
                  Transform Communities
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
                Through mediation, empathy, and purposeful empowerment, we help
                youth, creatives, and working professionals discover who they're
                meant to be and speak their truth with confidence.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={founder}
                  alt="ACE Leadership Hub Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                  TRANSFORMATIONAL LEADERSHIP
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-slate-900">
                Building{" "}
                <span className="font-semibold text-blue-600">
                  Authentic Leaders
                </span>
                <br />
                Who{" "}
                <span className="font-semibold text-blue-600">
                  Transform Communities
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed">
                Through mediation, empathy, and purposeful empowerment, we help
                youth, creatives, and working professionals discover who they're
                meant to be and speak their truth with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-8">
            OUR VISION
          </span>
          <h2 className="text-2xl text-justify lg:text-4xl font-light text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            To build a <span className="font-semibold text-blue-600">just</span>
            , <span className="font-semibold text-blue-600">peaceful</span>, and{" "}
            <span className="font-semibold text-blue-600">
              purpose driven Africa
            </span>{" "}
            where individuals, businesses, and communities thrive though{" "}
            <span className="font-semibold text-blue-600">access to law</span>,{" "}
            <span className="font-semibold text-blue-600">
              strategic clarity
            </span>
            , and{" "}
            <span className="font-semibold text-blue-600">
              ethical leadership
            </span>{" "}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We envision a generation of leaders who understand that true
            influence comes not from perfection, but from the courage to be
            authentically themselves while serving others with integrity and
            compassion.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
                THE JOURNEY
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
                From{" "}
                <span className="font-semibold text-blue-600">Silence</span> to
                <span className="font-semibold text-blue-600">
                  {" "}
                  Significance
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 space-y-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="space-y-6 text-slate-700 leading-relaxed">
                    <p className="text-xl font-medium text-slate-900 italic">
                      "I used to be the person who had brilliant ideas but
                      couldn't find the courage to share them. I was the one who
                      saw solutions but feared being labeled as 'too much' or
                      'desperate.'"
                    </p>

                    <p>
                      Growing up in a modest household, I watched my parents
                      work multiple jobs just to make ends meet. I learned early
                      that survival meant staying quiet, not making waves, and
                      certainly not drawing attention to yourself. Despite being
                      naturally gifted with ideas and insights, I spent years as
                      a silent observer, watching opportunities pass by because
                      I didn't believe my voice mattered.
                    </p>

                    <p>
                      The turning point came during my early career when I
                      witnessed a conflict between team members that was tearing
                      our department apart. I had the solution—I could see how
                      to bridge their differences—but I was paralyzed by the
                      fear of seeming presumptuous. That night, I made a
                      decision that would change everything: I would learn to
                      speak up without sounding desperate, to lead without
                      losing my authentic self.
                    </p>

                    <p>
                      I invested in myself—studying mediation, communication,
                      and authentic leadership. I discovered that my background
                      of struggle wasn't a weakness; it was my superpower. It
                      gave me empathy for others who felt voiceless and the
                      determination to help them find their authentic voice.
                    </p>

                    <p>
                      Today, what started as a personal journey of overcoming
                      silence has transformed into a movement. I've had the
                      privilege of mentoring thousands of individuals who, like
                      me, had brilliant minds but needed guidance on how to
                      share their gifts with confidence and impact.
                    </p>

                    <p className="text-xl font-medium text-slate-900 border-l-4 border-blue-400 pl-6 italic">
                      "Your background doesn't disqualify you from greatness—it
                      qualifies you for a unique kind of leadership that only
                      you can provide."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
                  THE MISSION
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-slate-900 leading-tight mb-6">
                  Empowering the{" "}
                  <span className="font-semibold text-blue-600">
                    Next Generation
                  </span>{" "}
                  of
                  <span className="font-semibold text-blue-600">
                    {" "}
                    Authentic Leaders
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At{" "}
                  <strong className="text-slate-900">ACE Leadership Hub</strong>
                  , we believe that authentic leadership isn't about
                  perfection—it's about being courageously and unapologetically
                  who you're meant to be.
                </p>

                <p>
                  Our unique approach combines{" "}
                  <strong className="text-blue-600">
                    mediation principles
                  </strong>
                  ,
                  <strong className="text-blue-600">
                    {" "}
                    empathetic communication
                  </strong>
                  , and
                  <strong className="text-blue-600">
                    {" "}
                    practical empowerment strategies
                  </strong>{" "}
                  to help individuals speak up without desperation, lead with
                  clarity, and create lasting positive impact.
                </p>

                <p>
                  Whether you're a creative professional finding your voice, a
                  young leader stepping into your power, or a working
                  professional seeking authentic influence, we provide the
                  tools, wisdom, and community to transform not just your
                  leadership—but your life.
                </p>
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                  Learn More About Our Approach
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={founder}
                  alt="ACE Leadership Hub Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
              CORE VALUES
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              The{" "}
              <span className="font-semibold text-blue-600">Principles</span>{" "}
              That Guide Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every program, workshop, and interaction is built on these
              foundational values that drive real transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              <span className="font-semibold text-blue-600">Real Stories</span>{" "}
              of Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Offerings */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full mb-4">
              HOW WE SERVE
            </span>
            <h2 className="text-3xl lg:text-4xl font-light mb-6">
              <span className="font-semibold text-yellow-400">
                Transformational
              </span>{" "}
              Programs & Services
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to unlock authentic leadership
              potential across all levels of society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <offering.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{offering.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {offering.description}
                </p>
                <button className="inline-flex items-center gap-2 text-yellow-400 font-medium hover:text-yellow-300 transition-colors group cursor-pointer">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Him Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
                MEET THE FOUNDER
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
                The Man Behind the{" "}
                <span className="font-semibold text-blue-600">Movement</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={founder}
                    alt="Founder Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">
                      A certified mediator, leadership coach, and empowerment
                      advocate
                    </strong>{" "}
                    with over 8 years of experience transforming lives across
                    three continents. His unique approach combines therapeutic
                    communication principles with practical leadership
                    strategies.
                  </p>

                  <p>
                    As a{" "}
                    <strong className="text-blue-600">
                      sought-after speaker and consultant
                    </strong>
                    , he has addressed audiences at major conferences,
                    universities, and corporate events. His work has been
                    featured in leading publications, and he's become a trusted
                    voice in the authentic leadership space.
                  </p>

                  <p>
                    Beyond his professional accolades, he's a passionate
                    advocate for mental health awareness in leadership,
                    believing that true strength comes from vulnerability and
                    authentic self-expression. His approach to conflict
                    resolution has helped restore relationships in families,
                    organizations, and communities.
                  </p>
                </div>

                {/* Credentials */}
                <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Education & Certifications
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Certified Professional Mediator</li>
                      <li>• Executive Leadership Coach</li>
                      <li>• Conflict Resolution Specialist</li>
                      <li>• Mental Health First Aid Certified</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Recognition & Impact
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Featured in 20+ publications</li>
                      <li>• Keynote speaker at 100+ events</li>
                      <li>• Mentored 500+ emerging leaders</li>
                      <li>• Active in 50+ communities</li>
                    </ul>
                  </div>
                </div>

                {/* Personal Quote */}
                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="text-lg italic text-slate-700 mb-2">
                    "My mission is simple: to help you discover that the leader
                    you're looking for is already within you. You don't need to
                    become someone else—you need to become more of who you
                    already are."
                  </p>
                  <div className="text-sm text-slate-500 font-medium">
                    — Founder, ACE Leadership Hub
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
