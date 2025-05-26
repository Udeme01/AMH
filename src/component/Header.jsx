import { Squeeze as Hamburger } from "hamburger-react";
import { Dot } from "lucide-react";

const Header = () => {
  return (
    <section className="relative bg-[url('/assets/images/henri.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen">
      <div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0">
        {/* header nav */}
        <header className="bg-cloudWhite py-2 text-blue px-6 flex items-center justify-between">
          <h1 className="text-2xl uppercase text-yellow font-semibold">
            Ace Mediation Hub
          </h1>
          <div className="">
            <Hamburger />
          </div>
        </header>
        <div className="flex items-center justify-center h-[100%] text-center text-white border bg-black/0">
          <div className="px-6 h-[75%]">
            <h1 className="text-xl text-sunflowerYellow font-bold uppercase mb-4 w-full text-center sm:text-red-600 md:text-green-600 lg:text-purple-600 xl:text-blue-600">
              Empowering Leader. Legal Mediator. Community Builder.
            </h1>
            <p className="text-6xl font-medium py-12 text-left text-cloudWhite">
              Understanding the rules, Building with{" "}
              <span className="text-sunflowerYellow">clarity</span>, makes you{" "}
              <span className="text-sunflowerYellow">unstoppable</span>.
            </p>
            <button className="bg-cloudWhite text-blue px-7 py-3 mt-6 text-lg font-semibold capitalize tracking-wide cursor-pointer hover:bg-blue hover:text-cloudWhite">
              Work with me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
