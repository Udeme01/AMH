import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This service completely transformed our workflow. The attention to detail and customer support is unmatched. I can't imagine working without it now.",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Exceptional quality and reliability. The team went above and beyond to ensure our success. Highly recommended for any business looking to scale.",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The results speak for themselves. We saw a 300% increase in efficiency within the first month. The ROI has been incredible.",
      featured: true,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Lead",
      company: "Global Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional, efficient, and always delivers on promises. This partnership has been a game-changer for our organization.",
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Creative Director",
      company: "Design Studio Pro",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding creativity and execution. They understood our vision perfectly and brought it to life beyond our expectations.",
      featured: false,
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CTO",
      company: "FutureTech",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Technical excellence combined with great communication. The project was delivered on time and exceeded all requirements.",
      featured: false,
    },
  ];

  const featuredTestimonials = testimonials.filter((t) => t.featured);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );
  };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial, featured = false }) => (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
        featured ? "border-2 border-blue-500" : "border border-gray-200"
      } relative overflow-hidden group`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 rounded-bl-full transform group-hover:scale-110 transition-transform duration-300"></div>

      <Quote className="text-blue-500 w-8 h-8 mb-4 opacity-60" />

      <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
        "{testimonial.text}"
      </p>

      <div className="flex items-center space-x-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-sm text-blue-600 font-medium">
            {testimonial.company}
          </p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {featured && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          Featured
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-size-display font-semibold text-black/80 mb-3">
            What Our Clients Say
          </h1>
          <p className="text-size-base text-black/60 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-20">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <Quote className="text-blue-500 w-16 h-16 mx-auto mb-6 opacity-60" />
                <p className="leading-h-base text-black/60 mb-12 max-w-4xl mx-auto">
                  "{featuredTestimonials[currentIndex]?.text}"
                </p>
              </div>

              <div className="flex items-center justify-center space-x-6">
                <img
                  src={featuredTestimonials[currentIndex]?.image}
                  alt={featuredTestimonials[currentIndex]?.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/20"
                />
                <div className="text-center">
                  <h3 className="font-semibold mb-1">
                    {featuredTestimonials[currentIndex]?.name}
                  </h3>
                  <p className="text-black/50 text-size-sm mb-1">
                    {featuredTestimonials[currentIndex]?.role}
                  </p>
                  <p className="text-blue font-medium mb-3">
                    {featuredTestimonials[currentIndex]?.company}
                  </p>
                  <StarRating
                    rating={featuredTestimonials[currentIndex]?.rating}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white group"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white group"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                featured={testimonial.featured}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue rounded-3xl p-12 text-white text-center">
          <h3 className="text-size-3xl font-semibold mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-semibold">500+</div>
              <div className="text-white text-size-sm tracking-body leading-h-base">
                Happy Clients
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold">98%</div>
              <div className="text-white text-size-sm tracking-body leading-h-base">
                Satisfaction Rate
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold">1000+</div>
              <div className="text-white text-size-sm tracking-body leading-h-base">
                Projects Completed
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold tracking-display leading-h-display mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-size-base text-black/50 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch today
            and see why our clients love working with us.
          </p>
          <button className="bg-blue text-white px-8 py-4 text-lg font-semibold transform hover:scale-95 transition duration-500 cursor-pointer">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
