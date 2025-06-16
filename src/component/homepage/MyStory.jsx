import React from "react";
import { Target, Users, Lightbulb, Quote, BookOpen, Award } from "lucide-react";
import { WORK_DRIVES } from "../../data/workDrives";

const MyStory = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {/* Personal quote section */}
            <div className="bg-gradient-to-br from-[#f7cca5]/20 to-[#2a37a7]/10 p-8 rounded-2xl border-l-4 border-[#2a37a7]">
              <Quote className="w-8 h-8 text-[#2a37a7] mb-4" />
              <blockquote className="text-size-base italic text-black leading-h-normal tracking-body mb-4">
                "I discovered that the gap between knowing the law and living it
                successfully was where most people got stuck. That's where I
                found my calling."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#2a37a7] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AH</span>
                </div>
                <div>
                  <h4 className="font-medium text-black text-size-base">
                    Ace Mediation Hub
                  </h4>
                  <p className="text-xs text-gray-600">
                    Founder & Lead Mediator
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2a37a7] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-size-xl font-semibold text-black mb-2">
                    My Background
                  </h3>
                  <p className="font-regular text-size-sm leading-h-base tracking-body">
                    With over a decade in legal practice and community
                    development, I've witnessed firsthand how legal complexity
                    can either empower or intimidate. My mission became clear:
                    make the law accessible and actionable for everyday
                    Africans.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#d3af37] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-size-xl font-semibold text-black mb-2">
                    My Approach
                  </h3>
                  <p className="font-regular text-size-sm leading-h-base tracking-body">
                    I believe in soft authority—guiding with wisdom rather than
                    commanding with power. Every interaction is about
                    empowerment, knowledge transfer, and building lasting
                    capacity in individuals and communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#87ceeb] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-size-xl font-semibold text-black mb-2">
                    My Impact
                  </h3>
                  <p className="font-regular text-size-sm leading-h-base tracking-body">
                    From resolving complex conflicts to building ethical
                    leaders, my work spans individual transformation to
                    community empowerment. Each success story reinforces my
                    belief that clarity truly makes people unstoppable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#f1f1f1] to-[#87ceeb]/10 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-[#2a37a7] rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Building Unstoppable Communities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  My work isn't just about solving today's problems—it's about
                  building the capacity to prevent tomorrow's conflicts and
                  create sustainable prosperity.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2a37a7]">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Lives Transformed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d3af37]">25+</div>
                    <div className="text-sm text-gray-600">
                      Communities Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#87ceeb]">
                      100+
                    </div>
                    <div className="text-sm text-gray-600">
                      Conflicts Resolved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#f7cca5]">10+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#f1f1f1] rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Drives <span className="text-[#2a37a7]">My Work</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {WORK_DRIVES.map((workdrive) => {
              const { id, icon, titleText, textDescription, color } = workdrive;
              const Icon = icon;

              return (
                <div key={id} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[#2a37a7] rounded-full mx-auto flex items-center justify-center">
                    <Icon color={color} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {titleText}
                  </h4>
                  <p className="text-gray-600">{textDescription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
