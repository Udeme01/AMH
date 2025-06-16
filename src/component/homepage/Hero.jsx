import founder from "/assets/images/ade.avif";

const Hero = () => {
  return (
    <main>
      {/* Mobile Hero - keeps your original design */}
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
          <h1 className="text-size-display md:text-7xl font-black mb- tracking-display uppercase">
            Build with clarity
            <br />
            makes you unstoppable
          </h1>
          <p className="text-size-sm md:text-2xl font-light opacity-90 max-w-3xl mx-auto mb-6 tracking-wide">
            Join ACE Leadership Hub in developing the next generation of
            empathetic leaders across law, mediation, and community development.
          </p>
          <button
            onClick={() => scrollToSection("contact-form")}
            className="inline-block px-12 py-5 bg-white text-black font-bold text-lg uppercase tracking-widest border-3 border-white transition-all duration-400 hover:bg-transparent hover:text-white hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            Explore Your Path
          </button>
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
