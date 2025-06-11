import { useState, useEffect } from "react";
import { Play } from "lucide-react";

const Campaign = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 23,
    minutes: 59,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-montserrat my-12">
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-16 x:max-w-7xl xl:mx-auto">
          {/* Video Player Section */}
          <div className="w-full order-1 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black flex items-center justify-center">
                {/* Video placeholder with silhouette */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-800/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Silhouette overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-t from-transparent via-blue-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 order-2 lg:order-2">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <p className="text-sm font-medium tracking-wider uppercase">
                  Upcoming Campaign
                </p>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  We Keep Our Promises
                </h1>
                <div className="w-12 h-1 bg-sunflowerYellow rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-base lg:text-lg leading-relaxed max-w-md">
                Many hard-working Americans have been left behind by the very
                institutions designed to help them. We can do better for every
                citizen. We can lift us all up.
              </p>

              {/* Countdown Timer */}
              <div className="space-y-4">
                <p className="text-sm font-medium">Elections Start Time:</p>

                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                      <div className="text-2xl lg:text-3xl font-bold">
                        {timeLeft.days.toString().padStart(2, "0")}
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm mt-2">Days</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                      <div className="text-2xl lg:text-3xl font-bold">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </div>
                    </div>
                    <p className=" text-xs lg:text-sm mt-2">Hours</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                      <div className="text-2xl lg:text-3xl font-bold">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm mt-2">Minutes</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                      <div className="text-2xl lg:text-3xl font-bold">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm mt-2">Seconds</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="outline font-regular py-3 px-6 transition duration-500 shadow-lg cursor-pointer text-blue-800 hover:scale-95 hover:outline-none hover:bg-blue-900 hover:text-white hover:shadow-xl">
                  All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
