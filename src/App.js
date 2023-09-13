import { useEffect, useState } from "react";

import {
  ChevronDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";

import "./App.css";
import "./index.css";

// Assets
import Foto from "./img/fotodiri2.jpeg";
import FotoSection2 from "./img/fotopersonal.png";
import Pattern from "./img/frame-flowers.svg";
import Flower1 from "./img/flowers/1.png";
import Flower2 from "./img/flowers/2.png";
import Flower3 from "./img/flowers/3.png";

//Components
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Linimasa from "./components/Linimasa";
import Porto from "./components/Portofolio";
import Navbar from "./components/Navbar";

// Tools Logo
import HTML from "./img/html-5.png";
import CSS from "./img/css-3.png";
import JS from "./img/js.png";
import ReactLogo from "./img/react.png";
import GithubLogo from "./img/github.png";
import TailwindLogo from "./img/tailwind.png";

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY);

      const toTopButton = document.getElementById("toTopButton");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        toTopButton.classList.remove("hidden");
        toTopButton.classList.add("block");
      } else {
        toTopButton.classList.remove("block");
        toTopButton.classList.add("hidden");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  const styleSkills =
    "w-1/3 md:w-1/12 bg-white p-2 xl:p-4 rounded-lg object-contain";

  const scrollDown = () => {
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar offset={offset} />

      {/* Hero */}
      <section className="h-[650px] md:h-screen bg-cream flex items-center justify-center">
        <div
          className="absolute top-0 w-full h-[650px] md:h-full bg-center bg-cover pointer-events-none z-10"
          style={{ backgroundImage: `url(${Pattern})` }}
        ></div>
        <div
          className="grid grid-cols-2  "
          style={{
            transform: `translateY(${offset * 0.25}px)`,
            opacity: `calc(1 - ${offset * 0.0018})`,
          }}
        >
          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end mt-8">
            <img
              src={Foto}
              alt="foto"
              className="w-1/2 md:w-[80%] xl:w-full max-w-[435px] object-contain rounded-[999px]"
            />
          </div>
          <div className="text-center col-span-2 md:col-span-1 flex flex-col items-center md:items-start justify-center md:ml-8 2xl:ml-24 max-w-4xl pt-8 md:pt-12">
            <p className="font-body w-full text-base md:text-lg m2xl:text-2xl font-bold">
              Hello, my name is
            </p>
            <h1 className="max-w-fit font-heading text-2xl md:text-2xl 2xl:text-4xl typewriter">
              Fiorenza Celestyn
            </h1>
            <button
              onClick={scrollDown}
              className="mt-12 self-center animate-bounce"
            >
              <ChevronDownIcon className="w-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-dark1 relative">
        <div className="w-full text-cream grid grid-cols-1 xl:grid-cols-2 mt-16 md:mt-32 min-h-screen">
          <div className="flex w-full h-72 sm:h-full items-start justify-center">
            <div className="bg-cream rounded-full h-full xl:h-3/4 w-1/2 px-4 py-2 md:px-8 md:py-4 xl:px-12 xl:py-8 relative">
              <img
                src={FotoSection2}
                alt="foto2"
                className="object-cover translate-y-4 xl:translate-y-12"
              />
              <img
                src={Flower1}
                className="absolute -bottom-24 left-0 scale-110 max-sm:-translate-y-12"
                alt="flower1 ornamen"
              />
            </div>
          </div>
          <div className="place-self-center max-md:px-4 max-xl:px-12 max-xl:mb-16 max-xl:mt-12">
            <h1 className="font-heading max-xl:text-center text-xl md:text-5xl my-8 leading-loose">
              About Me
            </h1>
            <p className="font-body md:w-3/4 md:text-3xl mb-8 max-xl:text-justify max-xl:mx-auto">
              <span className="font-bold">Hello there!</span> 🌱 I'm currently a
              student at Gadjah Mada University, diving headfirst into the world
              of Information Engineering. 📚 Through my academic journey, I've
              been lucky to explore the fascinating realm of website
              development, with a special focus on front-end work.
            </p>
            <p className="font-body md:w-3/4 md:text-3xl max-xl:mx-auto max-xl:text-justify">
              💻✨ I'm just a regular person who happens to adapt well to new
              challenges and enjoys working harmoniously in team settings. 🤝
              Honesty and a strong sense of responsibility are values I hold
              dear. 🙏 So, if you're interested in tech, teamwork, and a touch
              of sincerity, I'm here to learn and grow alongside you. Let's
              create some wonders together! 🌟
            </p>
          </div>
        </div>
        <img
          src={Flower2}
          className="absolute -top-16 right-0 animate-flick hidden xl:block"
          alt="flower2 ornamen"
        />
      </section>

      {/* Timeline */}
      {/* <Linimasa /> */}

      {/* Portofolio */}
      <Porto />

      {/* Tools */}

      {/* Random */}
      {/* <div className="overflow-hidden">
        <div className="max-md:text-xs bg-dark1 md:h-10 px-2 md:px-9 text-cream font-body font-bold tracking-wider">
          My random activities...
        </div>
        <Slider />
      </div> */}

      {/* Scroll To Top */}
      <button
        id="toTopButton"
        className="fixed bottom-4 right-4 md:bottom-12 md:right-12 h-12 md:h-16 aspect-square rounded-xl bg-choco border border-dark1 z-50 hover:-translate-x-1 hover:-translate-y-1 transition-all hidden"
        onClick={scrollTop}
      >
        <ChevronDoubleUpIcon className="w-8 text-dark1 font-bold mx-auto" />
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
