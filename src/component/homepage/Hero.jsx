import { LucideHeading1 } from "lucide-react";

const Hero = () => {
  return (
    <main>
      <section className="relative bg-[url('/assets/images/gather.jpg')] bg-cover bg-no-repeat bg-center w-[100%] h-screen font-montserrat">
        <div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0">
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between w-full mx-auto h-[60vh]">
            <div>
              <h1 className="text-3xl px-6 mb-3 font-medium text-center w-full text-cloudWhite">
                Building with{" "}
                <span className="text-sunflowerYellow">clarity</span>, makes you{" "}
                <span className="text-sunflowerYellow">unstoppable</span>.
              </h1>
              <p className="text-xs mt-2 font-bold uppercase w-full text-center text-cloudWhite">
                Unlock Your Authentic Leadership Through Mindful Empowerment
              </p>
            </div>

            <section className="w-[65%] p-6 flex flex-col justify-center">
              <button className="py-3 text-lg font-semibold capitalize tracking-wide cursor-pointer bg-blue-950 text-white rounded transition duration-500 hover:scale-95 hover:bg-blue-900">
                Explore your path
              </button>
              <button className="outline text-white px-6 py-3 mt-6 text-lg font-semibold capitalize tracking-wide cursor-pointer transition duration-500 hover:scale-95 hover:bg-blue-900 hover:outline-none">
                Watch my story
              </button>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
