'use client'
import { Carousel } from 'flowbite-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GuideSwiperCard from "./GuideSwiperCard";
import { GuideCards } from "@/constant";

const GuideSwiper = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="">
          <Slider {...settings} className="w-screen max-w-[400px] px-[5%]">
            {
                GuideCards.map(card => 
                <div key={card.num}>
                    <GuideSwiperCard title={card.title} text={card.text} num={card.num} />
                </div> )
            }
          </Slider>

          {/* <Carousel>
            <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 1
            </div>
            <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel> */}


          {/* <div id="controls-carousel" className="relative w-full" data-carousel="static">
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        item1
                      </div>
                  </div>
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        item2
                      </div>
                  </div>
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        item3
                      </div>
                  </div>
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        item4
                      </div>
                  </div>
              </div>

              <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                      </svg>
                      <span className="sr-only">Previous</span>
                  </span>
              </button>
              <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                      </svg>
                      <span className="sr-only">Next</span>
                  </span>
              </button>
          </div> */}

        </div>
      );
};

export default GuideSwiper;