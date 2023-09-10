import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";
import "./App.css";
import "./index.css";
import Pattern from "./img/frame-flowers.svg";
import Foto from "./img/fotodiri2.jpeg";
import HTML from "./img/html-5.png";
import CSS from "./img/css-3.png";
import JS from "./img/js.png";
import ReactLogo from "./img/react.png";
import GithubLogo from "./img/github.png";
import TailwindLogo from "./img/tailwind.png";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Linimasa from "./components/Linimasa";
import Porto from "./components/Portofolio";
import { Navbar } from "./components/Navbar";
import FotoSection2 from "./img/fotopersonal.png";

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
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar offset={offset} />
      <div className="h-[650px] md:h-screen bg-cream flex items-center justify-center">
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
          <div className="text-center col-span-2 md:col-span-1 flex flex-col items-center md:items-start justify-center md:ml-24 max-w-4xl pt-8 md:pt-12">
            <p className="font-body w-full text-base md:text-2xl font-bold">
              Hello, my name is
            </p>
            <h1 className="font-heading text-2xl md:text-4xl typewriter">
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
      </div>

      <div id="about" className="bg-dark1 ">
        <div className="w-full text-cream grid grid-cols-2 mt-16 md:mt-32 min-h-screen">
          <div className="flex w-full h-full items-start justify-center">
            <div className="bg-cream rounded-full h-3/4 w-1/2 px-12 py-8">
              <img
                src={FotoSection2}
                alt="foto2"
                className="absolute translate-y-12"
              />
            </div>
          </div>
          <div className="place-self-center">
            <h1 className="font-heading text-3xl md:text-5xl my-8 leading-loose">
              About Me
            </h1>
            <p className="font-body md:w-3/4 md:text-3xl mb-8">
              <span className="font-bold">Hello there!</span> 🌱 I'm currently a
              student at Gadjah Mada University, diving headfirst into the world
              of Information Engineering. 📚 Through my academic journey, I've
              been lucky to explore the fascinating realm of website
              development, with a special focus on front-end work.
            </p>
            <p className="font-body md:w-3/4 md:text-3xl">
              💻✨ I'm just a regular person who happens to adapt well to new
              challenges and enjoys working harmoniously in team settings. 🤝
              Honesty and a strong sense of responsibility are values I hold
              dear. 🙏 So, if you're interested in tech, teamwork, and a touch
              of sincerity, I'm here to learn and grow alongside you. Let's
              create some wonders together! 🌟
            </p>
          </div>
          {/* <div className="pt-[91px] pb-[78px] md:pt-[171px] md:pb-[158px]">
            <h1 className="font-heading text-3xl md:text-5xl">SKILLS</h1>
            <div className="mt-[34px] flex justify-center ">
              <div className="flex flex-wrap gap-4 md:gap-6 w-1/2 md:w-5/6 xl:w-7/8 max-w-5xl justify-center ">
                <img className={styleSkills} src={HTML} alt="" />
                <img className={styleSkills} src={CSS} alt="" />
                <img className={styleSkills} src={JS} alt="" />
                <img className={styleSkills} src={ReactLogo} alt="" />
                <img className={styleSkills} src={TailwindLogo} alt="" />
                <img className={styleSkills} src={GithubLogo} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <Linimasa /> */}

      {/* <Porto/> */}

      {/* <div className="overflow-hidden">
        <div className="max-md:text-xs bg-dark1 md:h-10 px-2 md:px-9 text-cream font-body font-bold tracking-wider">
          My random activities...
        </div>
        <Slider />
      </div> */}

      <button
        id="toTopButton"
        className="fixed bottom-12 right-12 h-12 md:h-16 aspect-square rounded-xl bg-cream border border-dark1 z-50 hover:-translate-x-1 hover:-translate-y-1 transition-all"
        onClick={scrollTop}
      >
        <ChevronDoubleUpIcon className="w-8 text-dark1 font-bold mx-auto" />
      </button>

      <Footer />
    </>
  );
}

export default App;
