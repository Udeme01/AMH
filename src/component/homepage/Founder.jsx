import { Link } from "react-router";
import founder from "/assets/images/ade.jpg";

const Founder = () => {
  return (
    <main className="font-montserrat">
      {/* Mobile Layout - Stack vertically */}
      <div className="md:hidden">
        <section className="bg-gray-50 py-6">
          <img
            src={founder}
            alt="platform founder"
            className="w-[75%] mx-auto rounded-lg shadow-lg"
          />
        </section>
        <section className="px-6 py-6">
          <h1 className="text-size-sm px-6 mb-3 leading-h-base font-regular capitalize text-center tracking-body">
            my story
          </h1>
          <h2 className="text-size-3xl tracking-display leading-h-display mb-6 font-semibold text-center">
            From Life to Transformation
          </h2>

          <div className="space-y-4 font-regular leading-h-base tracking-body text-size-sm">
            <p>
              My journey began with a simple realization: knowing the rules
              isn't enough. True empowerment comes from understanding how to
              apply them with clarity and purpose.
            </p>

            <p>
              In a world that often overwhelms, misguides, or silences your true
              voice, you must remember this: you were born with purpose, and you
              deserve clarity, peace, and the power to lead well.
            </p>

            <p>
              At Ace Mediation Hub, we believe that leadership starts with
              understanding yourself, your story, and the systems around you.
              You are not just a hustler, a professional, or a local voice, you
              are a potential force for peace, structure and legacy.
            </p>

            <p>
              My team and I are here to walk with you, to help you build with
              clarity, lead with peace, and grow with purpose. Through
              mediation, legal literacy, strategic education, and ethical
              community building. We're creating a future where Africans at
              large rise, not just with noise, but with wisdom.
            </p>

            <p>
              You are not alone on this journey. You are part of a growing
              community of thinkers, builders, and bridge-makers. And you belong
              here.
            </p>

            <p>
              To your clarity and impact,{" "}
              <span className="block font-semibold mt-2">Mr. AdePeters.</span>{" "}
              <span className="text-sm text-gray-600">
                Founder, Ace Mediation Hub
              </span>
            </p>
          </div>

          <button className="w-full text-base tracking-cta leading-h-base rounded bg-blue-950 text-white sm:w-auto px-8 py-3 font-regular capitalize cursor-pointer mt-8 hover:text-white transition duration-500 hover:shadow-lg hover:scale-95 hover:bg-blue-900">
            More about me
          </button>
        </section>
      </div>

      {/* Desktop/Tablet Layout - Text wrapping around image */}
      <div className="hidden md:block px-8 lg:px-16 py-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-sm font-regular capitalize text-gray-600 mb-3 tracking-wider">
            my story
          </h1>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide text-gray-800 leading-tight">
            From Life to Transformation
          </h1>
        </div>

        {/* Content with floating image */}
        <div className="relative">
          {/* Floating Image */}
          <div className="float-left mr-8 mb-6 bg-gray-50 p-6 rounded-lg shadow-lg md:w-80 lg:w-96">
            <img
              src={founder}
              alt="platform founder"
              className="w-full rounded-lg shadow-md object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>

          {/* Text content that flows around the image */}
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="font-light text-lg">
              My journey began with a simple realization: knowing the rules
              isn't enough. True empowerment comes from understanding how to
              apply them with clarity and purpose.
            </p>

            <p className="font-light text-lg">
              In a world that often overwhelms, misguides, or silences your true
              voice, you must remember this: you were born with purpose, and you
              deserve clarity, peace, and the power to lead well.
            </p>

            <p className="font-light text-lg">
              At Ace Mediation Hub, we believe that leadership starts with
              understanding yourself, your story, and the systems around you.
              You are not just a hustler, a professional, or a local voice, you
              are a potential force for peace, structure and legacy.
            </p>

            <p className="font-light text-lg">
              My team and I are here to walk with you, to help you build with
              clarity, lead with peace, and grow with purpose. Through
              mediation, legal literacy, strategic education, and ethical
              community building. We're creating a future where Africans at
              large rise, not just with noise, but with wisdom.
            </p>

            <p className="font-light text-lg">
              You are not alone on this journey. You are part of a growing
              community of thinkers, builders, and bridge-makers. And you belong
              here.
            </p>

            <p className="font-light text-lg">
              To your clarity and impact,{" "}
              <span className="block font-semibold mt-4 text-xl">
                Mr. AdePeters.
              </span>{" "}
              <span className="text-base text-gray-600">
                Founder, Ace Mediation Hub
              </span>
            </p>
          </div>

          {/* Clear float to ensure button appears below everything */}
          <div className="clear-left pt-8">
            <button className="bg-blue-900 text-white px-8 py-3 text-lg font-regular capitalize tracking-wide cursor-pointer transition-all duration-500 hover:shadow-lg hover:scale-95">
              <Link to="/about">More about me</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Founder;
