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
          <Slider {...settings} className="w-screen max-w-[400px] px-[7.5%]">
            {
                GuideCards.map(card => <GuideSwiperCard title={card.title} text={card.text} num={card.num} />)
            }
          </Slider>
        </div>
      );
};

export default GuideSwiper;