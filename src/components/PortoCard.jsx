import React from "react";

export const PortoCard = ({ title, desc, year, imgUrl, stacks, link }) => {
  return (
    <div className="min-w-[245px] max-w-[245px] md:min-w-[450px] max-w-[450px] bg-cream border border-dark1 rounded-lg shadow-lg flex flex-col h-full">
      <div className="w-full rounded-t-lg">
        <img
          src={imgUrl}
          alt={title}
          className="object-cover aspect-video rounded-t-lg"
        />
      </div>
      <div className="p-4 md:p-8 font-body text-black overflow-y-scroll">
        <p className="text-lg md:text-3xl font-semibold">{title}</p>
        <p className="text-sm md:text-xl font-semibold">{year}</p>
        <p className="text-xs md:text-lg text-justify">{desc}</p>
        {link ? (
          <a
            href={link}
            className="block w-fit px-6 py-2 mt-2 md:mt-4 bg-green rounded-full text-xs md:text-lg text-dark1 font-semibold hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_#D1BFBD] cursor-pointer hover:transform duration-300"
          >
            Visit
          </a>
        ) : null}
        <div className="flex flex-wrap items-center mt-8 gap-6">
          {stacks?.map((item) => {
            return (
              <div
                className="w-16 h-16 flex items-center justify-center"
                key={item.nama}
              >
                <img
                  src={item.logoUrl}
                  alt={item.nama}
                  className="object-contain aspect-square"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
