import founder from "/assets/images/ade.jpg";

const Founder = () => {
  return (
    <main className="font-montserrat">
      <section className="bg-cloudWhite py-6">
        <h1 className="text-2xl px-6 pb-3 font-semibold text-blue">About Mr. AdePeters</h1>
        <img
          src={founder}
          alt="platform founder"
          className="w-[85%] mx-auto rounded-lg"
        />
      </section>
      <section className="mx-6 py-4">
        <h1 className="text-xl mb-2">Hello Friend,</h1>
        <div className="font-light text-sm flex flex-col gap-6">
          <p>
            In a world that often overwhelms, misguides, or silences your true
            voice, you must remember this: you were born with purpose, and you
            deserve clarity, peace, and the power to lead well.
          </p>
          <p>
            At Ace Mediation Hub, we believe that leadership start with
            understanding yourself, your story, and the systems around you. You
            are not just a hustler, a professional, or a local voice, you are a
            potential force for peace, structure and kegacy.
          </p>
          <p>
            My team and I are here to walk with you, to help you build with
            clarity, lead with peace, and grow with purpose. Through mediation,
            legal literacy, strategic education, and ethical community building.
            We're creating a future where Africans at large rise, not just with
            noise, but with wisdom.
          </p>
          <p>
            You are not alone on this journey. You are part of a growing
            community of thinkers, builders, and bridge-makers. And you belong
            here.
          </p>

          <p>
            To your clarity and impact,{" "}
            <span className="block font-semibold">Mr. AdePeters.</span>{" "}
            <span>Founder, Ace Mediation Hub</span>
          </p>
        </div>
      </section>
      <button className="bg-blue text-cloudWhite px-6 py-3 text-lg font-semibold capitalize tracking-wide cursor-pointer mx-6 mb-8 mt-2 hover:bg-cloudWhite hover:text-blue">
        Discover More
      </button>
    </main>
  );
};

export default Founder;
