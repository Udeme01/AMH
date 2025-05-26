import { Squeeze as Hamburger } from "hamburger-react";

const Header = () => {
  return (
    <section className="relative bg-[url('/assets/images/gather.jpg')] bg-cover bg-no-repeat bg-center w-[100%] h-screen font-montserrat">
      <div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0">
        {/* header nav */}

        <header className="bg-cloudWhite px-6 py-2 text-blue flex items-center justify-between">
          <h1 className="text-2xl uppercase text-yellow font-semibold">
            Ace Mediation Hub
          </h1>
          <div>
            <Hamburger />
          </div>
        </header>

        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 items-start w-full px-6 mx-auto">
          <h1 className="text-xl font-bold uppercase mb-4 w-full text-left text-cloudWhite">
            Empowering Leaders. Legal Mediators.{" "}
            <span className="text-sunflowerYellow">Community Builders.</span>
          </h1>
          <p className="text-6xl font-medium text-left w-full text-cloudWhite">
            Building with{" "}
            <span className="text-sunflowerYellow">clarity</span>, makes you{" "}
            <span className="text-sunflowerYellow">unstoppable</span>.
          </p>
          <button className="bg-cloudWhite text-blue px-6 py-3 mt-6 text-lg font-semibold capitalize tracking-wide cursor-pointer hover:bg-blue hover:text-cloudWhite">
            Explore your path
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
