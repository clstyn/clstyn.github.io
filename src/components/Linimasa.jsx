import React, { useState } from "react";
import Line from "../img/Line.svg";
import Line2 from "../img/Line2.svg";
import {useHorizontalScroll} from "./HorizontalScroll";

export default function Linimasa() {
    const [offset, setOffset] = useState();

    const scrollRef = useHorizontalScroll();
    return (
        // <section className="overflow-hidden relative z-10" id="linimasa" ref={scrollRef}>
        // desktop 
        <>
        <section className="hidden lg:block overflow-x-auto no-scrollbar" id="linimasa" ref={scrollRef}> 
            <h1 className="text-5xl font-heading text-cream absolute pl-[150px] mt-32">A BRIEF HISTORY</h1>
            <div className="relative w-[4654px] px-[150px] py-[315px]">
                <img src={Line} alt="line" className="absolute top-[50%]"/>
                <div className="grid grid-cols-9 grid-rows-2 gap-6 2xl:mt-24">
                    <div className="text-cream   row-start-1 row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Graduated from <b>SMA Negeri 2 Semarang</b>.</p>
                        <h1 className="text-5xl font-heading mt-[11px] border-2 border-cream rounded px-2 py-1 inline-block">2020</h1>
                    </div>
                    <div className="text-cream   row-start-2">
                        <p className="font-body text-3xl max-w-[479px]">Entered college, majoring in <b>Information Engineering</b>.</p>
                    </div>
                    <div className="text-cream   row-start-1 row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part of <b>Find IT! 2021</b> as a Staff of Events Division.</p>
                        <h1 className="text-5xl font-heading mt-[11px] border-2 border-cream rounded px-2 py-1 inline-block">2021</h1>
                    </div>
                    <div className="text-cream   row-start-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part of Gelanggang Expo and Porsenigama 2021 as a Staff of IT Division. The team is responsible to create a static website for the events. Worked closely with other divisions as well.</p>
                    </div>
                    <div className="text-cream   row-start-1 row-span-2">
                        <p className="font-body text-3xl max-w-[479px]">Took part of NESCO 2022 as a Staff of Web Division. Mainly designing the website.</p>
                        <h1 className="text-5xl font-heading mt-[11px] border-2 border-cream rounded px-2 py-1 inline-block">2022</h1>
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
                        <h1 className="text-5xl font-heading border-2 border-cream rounded px-2 py-1 inline-block">2023</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="hidden sm:block lg:hidden" id="linimasa"> 
            <h1 className=" text-2xl text-center font-heading text-cream pt-[13px]">A BRIEF HISTORY</h1>
            <img src={Line2} alt="" className="absolute left-[50%] pt-[58px] pb-[58px] h-[2094px] md:h-[1474px]"/>
            <div className="relative px-[150px] py-[61px]">
                <div className="grid grid-rows-9 grid-cols-2 gap-8 2xl:mt-24">
                    <div className="text-cream   col-start-1 text-right  max-w-full flex-col">
                        <h1 className="font-heading text-2xl mb-4 border-2 border-cream rounded px-2 py-1 inline-block">2020</h1>
                        <p className="font-body text-xl">Graduated from <b>SMA Negeri 2 Semarang</b>.</p>
                    </div>
                    <div></div>
                    <div className="text-cream   col-start-2 flex-col">
                        <p className="font-body text-xl ">Entered college, majoring in <b>Information Engineering</b>.</p>
                    </div>
                    <div className="text-cream   col-start-1 text-right  max-w-full flex-col">
                        <h1 className="text-2xl font-heading mb-4 border-2 border-cream rounded px-2 py-1 inline-block">2021</h1>
                        <p className="font-body text-xl ">Took part of <b>Find IT! 2021</b> as a Staff of Events Division.</p>
                    </div>
                    <div className="col-start-2"></div>
                    <div className="text-cream   col-start-2 flex-col">
                        <p className="font-body text-xl ">Took part of Gelanggang Expo and Porsenigama 2021 as a Staff of IT Division. The team is responsible to create a static website for the events. Worked closely with other divisions as well.</p>
                    </div>
                    <div className="text-cream   col-start-1 text-right  max-w-full flex-col">
                        <h1 className="text-2xl font-heading mb-4 border-2 border-cream rounded px-2 py-1 inline-block">2022</h1>
                        <p className="font-body text-xl ">Took part of NESCO 2022 as a Staff of Web Division. Mainly designing the website.</p>
                    </div>
                    <div></div>
                    <div className="text-cream   col-start-2 flex-col">
                        <p className="font-body text-xl ">Worked as an assistant for <b>Basic Programming</b> laboratory practices.</p>
                    </div> 
                    <div className="text-cream   col-start-1 max-w-full text-right   flex-col">
                        <p className="font-body text-xl ">Took part in <b>Gelanggang Expo 2022</b> as a Staff of IT Division, with the same jobdesk as before.</p>
                    </div>
                    <div></div>
                    <div className="text-cream   col-start-2 flex-col">
                        <p className="font-body text-xl ">Volunteered in <b>Festival Gadjah Mada 2022</b> in IT Division. Mainly designing the website.</p>
                    </div>
                    <div className="text-cream   col-start-1 text-right  max-w-full flex-col">
                        <h1 className="text-2xl font-heading mb-4 border-2 border-cream rounded px-2 py-1 inline-block">2023</h1>
                        <p className="font-body text-xl ">Started internship in <b>PT Graphie Global Interaktif</b> as a web developer.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="sm:hidden">
            <h1 className=" text-2xl text-center font-heading text-cream pt-[13px]">A BRIEF HISTORY</h1>
            <img src={Line2} alt="" className="absolute left-[44px] phone:left-[78px] pt-[58px] pb-[58px]"/>
            <div className="flex flex-col text-cream max-w-[168px] ml-[76px] phone:ml-[110px] my-[58px]">
                <div className="mb-14">
                    <h1 className="font-heading text-2xl mb-4 font-bold border-2 border-cream rounded px-2 py-1 inline-block">2020</h1>
                    <p className="font-body">Graduated from <b>SMA Negeri 2 Semarang</b>.</p>
                </div>
                <div className="mb-14">
                    <p className="font-body">Entered college, majoring in <b>Information Engineering</b>.</p>
                </div>
                <div className="mb-14">
                    <div className="font-heading text-2xl mb-4 border-2 border-cream rounded px-2 py-1 inline-block font-bold">2021</div>
                    <p className="font-body">Took part of <b>Find IT! 2021</b> as a Staff of Events Division.</p>
                </div>
                <div className="mb-14">
                    <p className="font-body">Took part of Gelanggang Expo and Porsenigama 2021 as a Staff of IT Division. The team is responsible to create a static website for the events. Worked closely with other divisions as well.</p>
                </div>
                <div className="mb-14">
                    <h1 className="font-heading text-2xl mb-4 border-2 border-cream rounded px-2 py-1 inline-block font-bold">2022</h1>
                    <p className="font-body">Took part of NESCO 2022 as a Staff of Web Division. Mainly designing the website.</p>
                    
                </div>
                <div className="mb-14">
                    <p className="font-body">Worked as an assistant for <b>Basic Programming</b> laboratory practices.</p>
                </div> 
                <div className="mb-14">
                    <p className="font-body">Took part in <b>Gelanggang Expo 2022</b> as a Staff of IT Division, with the same jobdesk as before.</p>
                </div>
                <div className="mb-14">
                    <p className="font-body">Volunteered in <b>Festival Gadjah Mada 2022</b> in IT Division. Mainly designing the website.</p>
                </div>
                <div className="mb-14">
                    <h1 className="text-2xl font-heading mb-4 border-2 border-cream rounded px-2 py-1 inline-block font-bold">2023</h1>
                    <p className="font-body">Started internship in <b>PT Graphie Global Interaktif</b> as a web developer.</p>
                    
                </div>
            </div>
        </section>
        </>
    )
}

