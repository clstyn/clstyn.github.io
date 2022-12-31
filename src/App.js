import logo from './logo.svg';
import './App.css';
import './index.css';
import Pattern from './img/frame-flowers.svg';
import Foto from './img/fotodiri.png';
import HTML from './img/html-5.png';
import CSS from './img/css-3.png';
import JS from './img/js.png';
import ReactLogo from './img/react.png';
import GithubLogo from './img/github.png';
import TailwindLogo from './img/tailwind.png';
// import Music from './img/music.png';
// import Flowers from './img/flowers.png';
// import Anime from './img/anime.png';
import { ChevronDownIcon, DocumentIcon } from '@heroicons/react/24/solid';
import Footer from './components/Footer';
// import Slider from 'react-slick';
import { useEffect } from 'react';
import Slider from './components/Slider';
import Linimasa from './components/Linimasa';
import Porto from './components/Portofolio';

function App() {

  const styleSkills = "w-1/3 md:w-1/12 bg-white p-2 xl:p-4 rounded-lg object-contain";

  const sliderSetting = {
    arrow: false,
    dots: true,
    slidesToShow:1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    speed: 2000,
    autoPlay: true
  };

  const scrollDown = () => {
    document.getElementById('about').scrollIntoView({ behavior: "smooth" });
  };
  //https://codesandbox.io/s/parallax-effect-with-react-hooks-2k5hq?file=/src/App.js paralax
  return (
    <>
      <div className="h-screen w-full bg-cream bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${Pattern})`}}>
        <div className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1 flex justify-center mt-8">
            <img src={Foto} alt="foto" className='w-1/2 md:w-full'/>
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
      <Porto/>
      <div className="overflow-hidden">
        <div className="max-md:text-xs bg-dark1 md:h-10 px-2 md:px-9 text-cream font-body font-bold tracking-wider">
          My random activities...
        </div>
        <Slider/>
        {/* <Slider className="h-[371px]" {...sliderSetting}>
            <div className="h-full bg-cover bg-center flex items-center justify-center " style={{backgroundImage: `url(${Anime})`}}>
              <p className='text-cream text-center font-body text-2xl font-bold tracking-wider max-w-[771px]'>
                Watching or reading series can be a great way to skip time. I personally like fantasy series to follow along to.</p>
            </div>
            <div className="h-full bg-cover bg-center flex items-center justify-center " style={{backgroundImage: `url(${Music})`}}>
              <p className='text-cream text-center font-body text-2xl font-bold tracking-wider max-w-[771px]'>
                Music is such a mood booster. It helps me organize my mind and mood. I like listening to many genres of music. Sometimes, I do play the guitar because it is fun.
              </p>            
            </div>
            <div className="h-full bg-cover bg-center flex items-center justify-center " style={{backgroundImage: `url(${Flowers})`}}>
              <p className='text-cream text-center font-body text-2xl font-bold tracking-wider max-w-[771px]'>
                I am fond of traveling too. Especially to places with many wild flowers. I like to photograph them so I can enjoy their beauty longer.                
              </p>
            </div>
        </Slider> */}
      </div>
      <Footer/>
    </>
  );
}

export default App;
