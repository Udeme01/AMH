import { PROGRAM_BOXES } from "../../data/programboxes";

const ProgramBoxes = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 bg-gray-50">
      <h2 className="text-size-3xl tracking-display leading-h-normal mb-6 font-semibold text-left capitalize">
        These programs are designed for:
      </h2>
      <section className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAM_BOXES.map((programBox) => {
          const { id, titleText, titleDescription } = programBox;
          return (
            <div
              key={id}
              className="p-6 text-center bg-[url('/assets/images/gather.avif')] bg-cover bg-no-repeat bg-center rounded-lg bg-black/80"
            >
              <div className="bg-white/80 text-black rounded p-6">
                <h1 className="text-size-2xl font-semibold leading-h-display tracking-display">
                  {titleText}
                </h1>
                <p className="text-size-sm font-regular leading-h-base mt-1 text-justify">
                  {titleDescription}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ProgramBoxes;
