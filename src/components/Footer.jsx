import React from "react"
import Linkedin from "../img/linkedin.svg"
import Insta from "../img/insta.svg"
import Github from "../img/github.svg"


export default function Footer () {
    return (
        <footer className="bg-choco h-56 md:h-64 relative">
            <div className="flex flex-col items-center w-full pt-8 md:pt-16">
                <h1 className="font-heading">Contact me</h1>
                <div className="flex gap-6 pt-4">
                    <a className="opacity-50 hover:opacity-100 transition-all" href="https://www.linkedin.com/in/fiorenzacelestyn/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="linkedin" />
                    </a>
                    <a className="opacity-50 hover:opacity-100 transition-all" href="https://www.instagram.com/cxlestyn_/" target="_blank" rel="noreferrer">
                        <img src={Insta} alt="instagram" />                    
                    </a>
                    <a className="opacity-50 hover:opacity-100 transition-all" href="https://github.com/clstyn" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github" />
                    </a>
                    
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between font-heading text-xs md:text-xs py-2.5 px-2 md:px-9 absolute bottom-0 w-full">
                <p>Fiorenza Celestyn © 2022</p>
                <p className="">Image by <span><a className="hover:underline" href="https://www.freepik.com/author/rawpixel-com">rawpixel.com</a></span> on Freepik</p>
            </div>
        </footer>
    )
}