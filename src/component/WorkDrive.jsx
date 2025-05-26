import React from "react";
import { WORK_DRIVES } from "../data/workDrives";

const WorkDrive = () => {
  return (
    <section className="font-montserrat bg-cloudWhite p-6 m-6 rounded-2xl">
      <h1 className="text-3xl px-6 pb-3 font-semibold capitalize">
        What drives <span className="text-blue">my work</span>
      </h1>
      <div className="flex flex-col text-center gap-8 px-6 my-8">
        {WORK_DRIVES.map((workdrive) => {
          const { icon, titleText, textDescription, color } = workdrive;
          const Icon = icon;

          return (
            <div className="flex flex-col items-center justify-center">
              <Icon
                color={color}
                className={`bg-blue text-cloudWhite w-12 h-auto p-2 rounded-full mx-auto mb-4`}
              />
              <h2 className="text-lg capitalize text-blue font-semibold">
                {titleText}
              </h2>
              <p className="my-2 text-sm">{textDescription}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default WorkDrive;
