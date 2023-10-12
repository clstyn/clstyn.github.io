import React from "react";

import Flower from "../img/flowers/3.png";

const imgLogo = [
  {
    id: 1,
    imgUrl: "img/logos/cli.png",
  },
  {
    id: 2,
    imgUrl: "img/logos/html.png",
  },
  {
    id: 3,
    imgUrl: "img/logos/css.png",
  },
  {
    id: 4,
    imgUrl: "img/logos/javascript.png",
  },
  {
    id: 5,
    imgUrl: "img/logos/reactjs.png",
  },
  {
    id: 6,
    imgUrl: "img/logos/nodejs.png",
  },
  {
    id: 7,
    imgUrl: "img/logos/github.png",
  },
  {
    id: 8,
    imgUrl: "img/logos/firebase.png",
  },
  {
    id: 9,
    imgUrl: "img/logos/mongodb.png",
  },
  {
    id: 10,
    imgUrl: "img/logos/postgresql.png",
  },
  {
    id: 11,
    imgUrl: "img/logos/tailwind.png",
  },
  {
    id: 12,
    imgUrl: "img/logos/vscode.png",
  },
];

const Tools = () => {
  return (
    <div
      className="bg-choco relative text-dark1 py-16 md:py-32 min-h-[70vh]"
      id="tools"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center ">
        <div className="flex items-start justify-center">
          <h1 className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-center font-heading relative z-10">
            What I've used so far...
          </h1>
          <img
            src={Flower}
            alt="flower ornamen"
            className="absolute bottom-0 left-0 min-w-[1100px] hidden xl:block"
          />
        </div>

        <div>
          <div className="grid grid-cols-3 md:grid-cols-4 items-center place-items-center p-8 gap-8">
            {imgLogo.map((item) => {
              return (
                <div className="w-24 md:w-36 p-4 shadow-lg">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="aspect-square object-contain"
                    key={item.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
