import React from "react";
import { testimonials } from "../../data/testimonials";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="space-y-6 mb-16 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        What People <span className="text-[#d3af37]">Say</span>
      </h3>

      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#f7cca5]/10 to-[#87ceeb]/10 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#d3af37] fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#2a37a7] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
