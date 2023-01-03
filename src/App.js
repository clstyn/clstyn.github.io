import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import './App.css';
import './index.css';
import Pattern from './img/frame-flowers.svg';
import Foto from './img/fotodiri2.jpeg';
import HTML from './img/html-5.png';
import CSS from './img/css-3.png';
import JS from './img/js.png';
import ReactLogo from './img/react.png';
import GithubLogo from './img/github.png';
import TailwindLogo from './img/tailwind.png';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Linimasa from './components/Linimasa';
import Porto from './components/Portofolio';

function App() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll(){
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);


  const styleSkills = "w-1/3 md:w-1/12 bg-white p-2 xl:p-4 rounded-lg object-contain";

  const scrollDown = () => {
    document.getElementById('about').scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <>
      {/* <div className="h-screen w-full bg-cream bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${Pattern})`}}> */}
      <div className="h-screen w-full bg-cream flex items-center justify-center" >
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover pointer-events-none z-10" style={{backgroundImage: `url(${Pattern})`}}></div>
        <div className="grid grid-cols-2  " style={{transform: `translateY(${offset * 0.25}px)`, opacity: `calc(1 - ${offset * 0.0018})`}}>
          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end mt-8">
            <img src={Foto} alt="foto" className='w-1/2 md:w-[80%] xl:w-full max-w-[435px] object-contain rounded-[999px]'/>
          </div>
          <div className="text-center col-span-2 md:col-span-1 flex flex-col items-center md:items-start justify-center md:ml-24 max-w-4xl pt-8 md:pt-12">
            <p className='font-body w-full text-base md:text-2xl font-bold'>Hello, my name is</p>
            <h1 className='font-heading text-2xl md:text-4xl'>Fiorenza Celestyn</h1>
            <button onClick={scrollDown} className="mt-12 self-center animate-bounce">
              <ChevronDownIcon className='w-8'/>
            </button>
          </div>
        </div>
      </div>

      <div id='about' className="bg-dark1">
        <div className="w-full text-center text-cream ">
          <div className='pt-[78px] md:pt-[158px]'>
            <h1 className="font-heading text-3xl md:text-5xl">ABOUT ME</h1>
            <ul className='font-body mt-[34px]'>
              <li>A third-year <b>Information Engineering</b> student.</li>
              <li>An <b>adaptive</b>, <b>accountable</b>, and <b>rational</b> person</li>
              <li>I like to build stuff.</li>
              <li>I am into <b>web app development</b>.</li>
            </ul>
          </div>
          <div className='pt-[91px] pb-[78px] md:pt-[171px] md:pb-[158px]'>
            <h1 className="font-heading text-3xl md:text-5xl">SKILLS</h1>
            <div className='mt-[34px] flex justify-center '>
              <div className="flex flex-wrap gap-4 md:gap-6 w-1/2 md:w-5/6 xl:w-7/8 max-w-5xl justify-center ">
                <img className={styleSkills} src={HTML} alt="" />
                <img className={styleSkills} src={CSS} alt="" />
                <img className={styleSkills} src={JS} alt="" />
                <img className={styleSkills} src={ReactLogo} alt="" />
                <img className={styleSkills} src={TailwindLogo} alt="" />
                <img className={styleSkills} src={GithubLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Linimasa/>

      {/* <Porto/> */}

      <div className="overflow-hidden">
        <div className="max-md:text-xs bg-dark1 md:h-10 px-2 md:px-9 text-cream font-body font-bold tracking-wider">
          My random activities...
        </div>
        <Slider/>
      </div>
{/* 
      <button className="absolute bottom-0 right-0 h-8 w-8 bg-slate" onClick={scrollTop}>
      <ChevronDownIcon className='w-8'/>
      </button> */}

      <Footer/>
    </>
  );
}

export default App;
