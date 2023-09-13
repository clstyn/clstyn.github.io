import React from "react";

export const PortoCard = ({ title, desc, year, imgUrl, stacks, link }) => {
  return (
    <div className="min-w-[240px] max-w-[240px] md:min-w-[450px] max-w-[450px] bg-cream border border-dark1 rounded-lg shadow-lg flex flex-col h-full">
      <div className="w-full rounded-t-lg">
        <img
          src={imgUrl}
          alt={title}
          className="object-cover aspect-video rounded-t-lg"
        />
      </div>
      <div className="p-4 md:p-8 font-body text-black">
        <p className="text-lg md:text-3xl font-semibold">{title}</p>
        <p className="text-sm md:text-xl font-semibold">{year}</p>
        <p className="text-xs md:text-lg text-justify">{desc}</p>
        {!link ? (
          <a
            href={link}
            className="block w-fit px-6 py-2 mt-2 md:mt-4 bg-green rounded-full text-xs md:text-lg text-white font-semibold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_#D1BFBD] cursor-pointer hover:transform duration-300"
          >
            Visit
          </a>
        ) : null}
      </div>
    </div>
  );
};
