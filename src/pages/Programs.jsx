import { Link } from "react-router";

const Programs = () => {
  return (
    <section className="h-[90vh] pt-40 flex flex-col items-center justify-center font-montserrat text-justify mx-6">
      <h1 className="text-4xl leading-24 font-medium animate-bounce">
        Coming Soon!
      </h1>
      <p>We're working hard to finish the development of this feature.</p>
      <button className="bg-slate-700 text-white px-4 py-3 tracking-wider rounded transition duration-500 hover:scale-95 hover:bg-slate-700/95 cursor-pointer">
        <Link to="/">Go Back Home</Link>
      </button>
    </section>
  );
};

export default Programs;
