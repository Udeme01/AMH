import programHero from "/assets/images/programHero-01.avif";

const CategoryCards = () => {
  const categories = [
    "leadership",
    "Empathy",
    "Mediation",
    "Negotiation",
    "Peace Building",
  ];

  return (
    <section className="p-6 overflow-x-auto">
      <div className="flex gap-4 w-max justify-center md:w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-72 h-40 flex items-center justify-center flex-shrink-0 bg-[url('/assets/images/gather.avif')] bg-cover bg-no-repeat bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="bg-white/80 w-full h-20 mx-6 text-center flex items-center justify-center rounded-md backdrop-blur-sm">
              <h3 className="text-base leading-6 font-semibold uppercase text-gray-800">
                {category}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
