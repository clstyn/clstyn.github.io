import { BackwardIcon, ForwardIcon } from "@heroicons/react/24/outline";
import dataPorto from "../data/dataPorto";
import { PortoCard } from "./PortoCard";

export default function Porto() {
  let container = document.getElementById("container");

  const buttonNext = () => {
    let width = container.clientWidth;
    container.scrollLeft = container.scrollLeft + width / 2;
    console.log(width);
  };

  const buttonPrev = () => {
    let width = container.clientWidth;
    container.scrollLeft = container.scrollLeft - width / 2;
    console.log(width);
  };

  return (
    <section className="bg-choco relative text-dark1 py-16 md:py-32" id="porto">
      <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-center font-heading">
        Portofolio
      </h1>
      <p className="text-center text-sm md:text-xl my-4 font-body font-semibold">
        This thing itself is a portofolio! :D
      </p>

      {/* Carousel */}
      <div className="relative md:mt-24 px-12 overflow-hidden flex w-full h-[250px] md:h-[500px]">
        <div className="w-8 md:w-12 h-full flex items-center">
          <BackwardIcon
            onClick={buttonPrev}
            className="w-full text-dark1 hover:fill-dark1 hover:scale-125 transition-all cursor-pointer"
          />
        </div>

        {/* Container */}
        <div className="w-full mx-6 md:mx-8 slider-container" id="container">
          {dataPorto.map((item) => {
            return <PortoCard {...item} key={item.id} />;
          })}
        </div>
        <div className="w-8 md:w-12 h-full flex items-center">
          <ForwardIcon
            onClick={buttonNext}
            className="w-full text-dark1 hover:fill-dark1 hover:scale-125 transition-all cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
