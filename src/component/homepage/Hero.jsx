import founder from "/assets/images/ade.avif";

const Hero = () => {
  return (
    <main>
      {/* Mobile Hero - keeps your original design */}
      <section className="md:hidden relative bg-[url('/assets/images/gather.avif')] bg-cover bg-no-repeat bg-center w-full h-screen">
        <div className="bg-black/50 absolute top-0 right-0 bottom-0 left-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between w-full mx-auto h-[60vh]">
            <section className="text-white text-center px-6">
              <h1 className="text-size-display tracking-display leading-h-display font-semibold">
                Building with <span className="text-yellow-400">clarity</span>,
                makes you <span className="text-yellow-400">unstoppable</span>.
              </h1>
              <p className="text-size-sm font-regular leading-h-base mt-3">
                Unlock Your Authentic Leadership Through Mindful Empowerment
              </p>
            </section>

            <section className="w-[55%] p-6 flex flex-col justify-center gap-3">
              <button className="py-3 text-base capitalize tracking-cta leading-h-base cursor-pointer bg-blue-950 text-white rounded transition duration-500 hover:scale-95 hover:bg-blue-900">
                Explore your path
              </button>
              <button className="text-white text-base bg-blue-950 py-3 capitalize rounded tracking-cta leading-h-base cursor-pointer transition duration-500 hover:scale-95 hover:bg-blue-900">
                Watch my story
              </button>
            </section>
          </div>
        </div>
      </section>

      {/* Desktop Hero - new minimalistic design */}
      <section className="hidden md:flex min-h-screen relative font-montserrat bg-[url('/assets/images/ade.avif')] bg-cover bg-top bg-no-repeat">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
        <div className="container mx-auto px-8 lg:px-12 flex items-center relative z-10">
          <div className="grid grid-cols-2 gap-16 lg:gap-24 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-slate-900">
                  Building with{" "}
                  <span className="font-medium text-blue-600">clarity</span>,
                  <br />
                  makes you{" "}
                  <span className="font-medium text-blue-600">unstoppable</span>
                  .
                </h1>

                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>

                <p className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed max-w-lg">
                  Unlock your authentic leadership through mindful empowerment
                  and purposeful growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-4 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5">
                  Explore Your Path
                </button>

                <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-medium rounded-lg transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5">
                  Watch My Story
                </button>
                 
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img
                src={founder}
                alt="hero image"
                className="rounded object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
