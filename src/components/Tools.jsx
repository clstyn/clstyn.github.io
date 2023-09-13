import React from "react";

import Flower from "../img/flowers/3.png";

const Tools = () => {
  return (
    <div
      className="bg-choco relative text-dark1 py-16 md:py-32 flex flex-col xl:flex-row min-h-[70vh]"
      id="tools"
    >
      <div className="flex xl:w-1/2 items-start justify-center">
        <h1 className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-center font-heading relative z-10">
          What I've used so far...
        </h1>
        <img
          src={Flower}
          alt="flower ornamen"
          className="absolute bottom-0 left-0 w-[700px] animate-move-random"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Tools;
