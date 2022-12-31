import { data } from "autoprefixer";
import { useEffect, useState } from "react";
// import Test from '../img/anime.png';

const dataSlider = [
    {
        id: 1,
        url: 'img/anime.png',
        title: 'Watching series',
        desc: 'Watching or reading series can be a great way to skip time. I personally like fantasy series to follow along to.'
    },
    {
        id: 2,
        url: 'img/music2.png',
        title: 'Listening and playing music',
        desc: 'Music is such a mood booster. It helps me organize my mind and mood. I like listening to many genres of music. Sometimes, I do play the guitar because it is fun.'
    },
    {
        id: 3,
        url: 'img/flowers3.png',
        title: 'Photographing wild flowers',
        desc: 'I am fond of traveling too. Especially to places with many wild flowers. I like to photograph them so I can enjoy their beauty longer.'
    }
]

export default function Slider(){
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => setSlideIndex((prevIndex) => 
                prevIndex === (dataSlider.length - 1) ? 0 : prevIndex + 1), 
            3000
        );
        return () => {};
    }, [slideIndex]);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length)
        {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length)
        {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1)
        {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1)
        {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return(
        // slideshow
        <div className="mx-auto my-0 overflow-hidden ">
            {/* slideshow slider */}
            <div className="whitespace-nowrap bg-dark1 slides" style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}>
                {/* slides */}
                {dataSlider.map((obj, index) => (
                    <div key={index} className="h-[200px] md:h-[371px] w-full inline-block bg-cover bg-center" style={{backgroundImage: `url(${process.env.PUBLIC_URL + obj.url})`}}>
                        <div className="tracking-wider text-cream font-body font-bold text-sm md:text-2xl text-center mt-[88px] md:mt-[157px] mx-auto drop-shadow-xl">{obj.title}</div>
                    </div>
                ))}
            </div>
            
            {/*
            <div className="text-center">
                {dataSlider.map((_, index) => (
                    <div key={index} className="inline-block w-3 h-3 rounded-[50%] cursor-pointer bg-dark1 mt-[15px] mx-[7px]"></div>
                ))}
            </div> */}
        </div>
    )
}