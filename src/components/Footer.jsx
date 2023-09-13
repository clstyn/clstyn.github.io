import React from "react";
import Linkedin from "../img/linkedin.svg";
import Insta from "../img/insta.svg";
import Github from "../img/github.svg";

export default function Footer() {
  return (
    <footer className="bg-choco h-56 md:h-64 relative text-dark1 border-t-2 border-dark1">
      <div className="flex flex-col items-center w-full pt-8 md:pt-16">
        <h1 className="font-heading text-2xl font-bold mb-4">Contact Me</h1>
        <div className="flex gap-6 pt-4">
          <a
            className="opacity-50 hover:opacity-100 transition-all"
            href="https://www.linkedin.com/in/fiorenzacelestyn/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a
            className="opacity-50 hover:opacity-100 transition-all"
            href="https://www.instagram.com/cxlestyn_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Insta} alt="instagram" />
          </a>
          <a
            className="opacity-50 hover:opacity-100 transition-all"
            href="https://github.com/clstyn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between font-heading text-xs md:text-lg py-2.5 px-2 md:px-9 w-full mt-8 md:mt-12">
        <p className="max-md:text-center">Fiorenza Celestyn © 2023</p>
        <p className="max-md:text-center">
          Image by{" "}
          <span>
            <a
              className="hover:underline"
              href="https://www.freepik.com/author/rawpixel-com"
            >
              rawpixel.com
            </a>
          </span>{" "}
          on Freepik
        </p>
      </div>
    </footer>
  );
}
