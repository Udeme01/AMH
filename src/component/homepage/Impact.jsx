import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { IMPACT_CARD } from "../../data/impactCards";

const Impact = () => {
  return (
    <section id="services" className="py-6 bg-[#f1f1f1] font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Integrated Solutions for{" "}
            <span className="text-[#2a37a7]">Lasting Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My approach combines legal expertise with empathetic leadership to
            create practical solutions that empower individuals and transform
            communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {IMPACT_CARD.map((impact) => {
            const { icon, title, description, color } = impact;
            return (
              <div className="bg-white py-10 px-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded">
                <header className="text-center pb-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      size="2xl"
                      className="text-blue-900"
                    />
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">{title}</h1>
                </header>
                <div>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
