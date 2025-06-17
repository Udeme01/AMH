import programHero from "/assets/images/programHero-01.avif";
import CategoryCards from "../component/program/CategoryCards";

import { Link } from "react-router";
import CourseCatalog from "../component/program/CourseCatalog";
import ProgramBoxes from "../component/program/ProgramBoxes";

const Programs = () => {
  return (
    <section>
      {/* <section className="relative w-full"> */}
      <section>
        <div className="w-full h-full relative flex flex-col items-center justify-center space-y-6 bg-[url('/assets/images/programHero-01.avif')] bg-cover bg-center bg-no-repeat min-h-[50vh] lg:min-h-[70vh]">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/70 h-full w-full" />
          <section className="relative z-40 text-white flex flex-col items-center justify-center gap-2 w-full lg:gap-6">
            <h1 className="text-size-display text-center font-black tracking-display uppercase md:text-5xl">
              Unlock your leadership potential
            </h1>
            <p className="text-center text-size-sm font-light opacity-90 max-w-3xl mx-auto tracking-wide leading-h-base md:text-size-lg">
              Explore expert-led programs to grow your mindset, career, and
              confidence.
            </p>
          </section>

          <section className="relative z-40 w-full text-center text-white text-size-sm font-medium px-6 py-2 flex flex-col gap-2 items-center justify-center md:flex-row">
            <button className="border py-px px-2 w-fit cursor-pointer">
              How can I be an empathetic leader?
            </button>
            <button className="border py-px px-2 w-fit cursor-pointer">
              How can I be confident?
            </button>
            <button className="border py-px px-2 w-fit cursor-pointer">
              How can I be empathetic?
            </button>
          </section>

          <section className="relative z-40 text-white text-center text-size-sm w-full lg:text-size-base">
            <p>
              Not sure where to begin?{" "}
              <Link to="/" className="font-semibold leading-h-base">
                Take our quiz →
              </Link>{" "}
            </p>
          </section>
        </div>
      </section>
      {/* </section> */}
      <CategoryCards />
      <CourseCatalog />

      <ProgramBoxes />
    </section>
  );
};

export default Programs;
