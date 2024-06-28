import replacements from "./replacements";
import ReplacementCard from "../../ReplacementCard/ReplacementCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const NextArrow = ({ onClick, currentSlide, slidesToShow, slideCount }) => {
  const isDisabled = currentSlide + slidesToShow >= slideCount;
  return (
    <div
      className={`absolute right-[-100px] top-[50%] transform translate-y-[-50%] z-[9] text-[white] hover:text-ivory-white-800 ${
        isDisabled ? "text-ivory-white-800" : "cursor-pointer"
      }`}
      onClick={isDisabled ? null : onClick}
    >
      <MdArrowForwardIos size={30} />
    </div>
  );
};

const PrevArrow = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;
  return (
    <div
      className={`absolute left-[-100px] top-[50%] transform translate-y-[-50%] z-[9] text-[white] hover:text-ivory-white-800 ${
        isDisabled ? "text-ivory-white-800" : "cursor-pointer"
      }`}
      onClick={isDisabled ? null : onClick}
    >
      <MdArrowBackIosNew size={30} />
    </div>
  );
};

const ReplacementCards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow slidesToShow={6} slideCount={replacements.length} />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          nextArrow: (
            <NextArrow slidesToShow={6} slideCount={replacements.length} />
          ),
        },
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 5,
          nextArrow: (
            <NextArrow slidesToShow={5} slideCount={replacements.length} />
          ),
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          nextArrow: (
            <NextArrow slidesToShow={4} slideCount={replacements.length} />
          ),
        },
      },
    ],
  };

  const firstSet = replacements.slice(0, 10);
  const secondSet = replacements.slice(10, 20);

  return (
    <div className="w-[80vw] mx-auto space-y-8">
      <div className="relative">
        <Slider {...settings}>
          {firstSet.map((replacement, index) => (
            <div key={index} className="px-4">
              <ReplacementCard {...replacement} />
            </div>
          ))}
        </Slider>
      </div>
      <hr className="my-4 border-ivory-white-800" />
      <div className="relative">
        <Slider {...settings}>
          {secondSet.map((replacement, index) => (
            <div key={index} className="px-4">
              <ReplacementCard {...replacement} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReplacementCards;
