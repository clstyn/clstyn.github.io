import React from "react";

export const PortoCard = ({ title, desc, year, imgUrl, stacks }) => {
  return (
    <div className="min-w-[300px] max-w-[300px] md:min-w-[450px] max-w-[450px] bg-cream border border-dark1 rounded-lg shadow-lg flex flex-col h-full">
      <div className="p-4 md:p-8 font-body text-black">
        <p className="text-xl md:text-3xl font-semibold">{title}</p>
        <p className="text-lg md:text-xl font-semibold">{year}</p>
        <p className="text-sm md:text-lg text-justify">{desc}</p>
      </div>
    </div>
  );
};
