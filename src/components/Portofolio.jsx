import { useRef, useEffect } from "react";
import { BackwardIcon, ForwardIcon } from "@heroicons/react/24/outline";
import dataPorto from "../data/dataPorto";
import { PortoCard } from "./PortoCard";

export default function Porto() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const buttonNext = () => {
      let width = container.clientWidth;
      container.scrollLeft = container.scrollLeft + width / 2;
    };

    const buttonPrev = () => {
      let width = container.clientWidth;
      container.scrollLeft = container.scrollLeft - width / 2;
    };

    // const buttonNextPhone = () => {
    //   let width = container.clientWidth;
    //   container.scrollLeft = container.scrollLeft + width;
    // };

    // const buttonPrevPhone = () => {
    //   let width = container.clientWidth;
    //   container.scrollLeft = container.scrollLeft - width;
    // };

    const prevButtonDesk = document.getElementById("prev-icon-desk");
    const nextButtonDesk = document.getElementById("next-icon-desk");
    // const prevButtonPhone = document.getElementById("prev-icon-phone");
    // const nextButtonPhone = document.getElementById("next-icon-phone");

    prevButtonDesk.addEventListener("click", buttonPrev);
    nextButtonDesk.addEventListener("click", buttonNext);
    // prevButtonPhone.addEventListener("click", buttonPrevPhone);
    // nextButtonPhone.addEventListener("click", buttonNextPhone);

    return () => {
      prevButtonDesk.removeEventListener("click", buttonPrev);
      nextButtonDesk.removeEventListener("click", buttonNext);
      // prevButtonPhone.removeEventListener("click", buttonPrevPhone);
      // nextButtonPhone.removeEventListener("click", buttonNextPhone);
    };
  }, []);

  return (
    <section className="bg-choco relative text-dark1 py-16 md:py-32" id="porto">
      <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-center font-heading">
        Portofolio
      </h1>
      <p className="text-center text-sm md:text-xl my-4 font-body font-semibold">
        This website itself is a portofolio!
      </p>

      {/* Carousel */}
      <div className="relative md:mt-24 px-4 md:px-12 overflow-hidden flex w-full h-[360px] md:h-[500px] xl:h-[590px]">
        <div className="w-8 md:w-12 h-full flex items-center">
          <BackwardIcon
            id="prev-icon-desk"
            className="hidden xl:block w-full text-dark1 hover:fill-dark1 hover:scale-125 transition-all cursor-pointer"
          />
          {/* <BackwardIcon
            id="prev-icon-phone"
            className="xl:hidden w-full text-dark1 hover:fill-dark1 hover:scale-125 transition-all cursor-pointer"
          /> */}
        </div>

        {/* Container */}
        <div
          className="flex w-full mx-6 md:mx-8 max-xl:overflow-x-scroll scrollbar-hide slider-container gap-4"
          id="container"
          ref={containerRef}
        >
          {dataPorto.map((item) => {
            return <PortoCard {...item} key={item.id} />;
          })}
        </div>
        <div className="w-8 md:w-12 h-full flex items-center">
          <ForwardIcon
            id="next-icon-desk"
            className="hidden xl:block w-full text-dark1 hover:fill-dark1 hover:scale-125 transition-all cursor-pointer"
          />
          {/* <ForwardIcon
            id="next-icon-phone"
            className="xl:hidden w-full text-dark1 hover:fill-dark1 hover:scale-125 transition-all cursor-pointer"
          /> */}
        </div>
      </div>
    </section>
  );
}
