import React from "react";
import Line from "../img/Line.svg";
import {useHorizontalScroll} from "./HorizontalScroll";

export default function Linimasa() {
    const scrollRef = useHorizontalScroll();
    return (
        // <section className="overflow-hidden relative z-10" id="linimasa" ref={scrollRef}>
        // desktop 
        <section className="hidden lg:block overflow-x-auto no-scrollbar" id="linimasa" ref={scrollRef}> 
            <h1 className="text-5xl font-heading text-cream absolute pl-[150px] mt-32">A BRIEF HISTORY</h1>
            <div className="h-screen hidden lg:block relative w-[4654px] px-[150px] pt-[315px]">
                <img src={Line} alt="line" className="absolute top-[50%]"/>
                <div className="grid grid-cols-9 grid-rows-2 gap-6 ">
                    <div className="text-cream   row-start-1 row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Graduated from <b>SMA Negeri 2 Semarang</b>.</p>
                        <h1 className="text-5xl font-heading mt-[11px]">2020</h1>
                    </div>
                    <div className="text-cream   row-start-2">
                        <p className="font-body text-3xl max-w-[479px]">Entered college, majoring in <b>Information Engineering</b>.</p>
                    </div>
                    <div className="text-cream   row-start-1 row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part of <b>Find IT! 2021</b> as a Staff of Events Division.</p>
                        <h1 className="text-5xl font-heading mt-[11px]">2021</h1>
                    </div>
                    <div className="text-cream   row-start-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part of Gelanggang Expo and Porsenigama 2021 as a Staff of IT Division. The team is responsible to create a static website for the events. Worked closely with other divisions as well.</p>
                    </div>
                    <div className="text-cream   row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part of NESCO 2022 as a Staff of Web Division. Mainly designing the website.</p>
                        <h1 className="text-5xl font-heading mt-[11px]">2022</h1>
                    </div>
                    <div className="text-cream   row-start-2">
                        <p className="font-body text-3xl max-w-[479px]">Worked as an assistant for <b>Basic Programming</b> laboratory practices.</p>
                    </div> 
                    <div className="text-cream   row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part in <b>Gelanggang Expo 2022</b> as a Staff of IT Division, with the same jobdesk as before.</p>
                    </div>
                    <div className="text-cream   row-start-2">
                        <p className="font-body text-3xl max-w-[479px]">Volunteered in <b>Festival Gadjah Mada 2022</b> in IT Division. Mainly designing the website.</p>
                    </div>
                    <div className="text-cream   row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Started internship in <b>PT Graphie Global Interaktif</b> as a web developer.</p>
                        <h1 className="text-5xl font-heading ">2023</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

