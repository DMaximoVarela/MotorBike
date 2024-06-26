import { useState, useEffect } from "react";
import NoNeonButton from "../NoNeonButton/NoNeonButton";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import style from "./ServicesCarrousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    name: "Reparación de Autos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer malesuada ex id quam hendrerit, in placerat leo aliquet.",
    image:
      "https://images.unsplash.com/photo-1507578196479-eb569f365f5b?q=80&w=1533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Diágnostico de Motor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer malesuada ex id quam hendrerit, in placerat leo aliquet.",
    image: "https://i.ibb.co/rZ59C9Y/paul-cisneros-vzw6mt-O7m-Yw-unsplash.jpg",
  },
  {
    name: "Alineación de Ruedas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer malesuada ex id quam hendrerit, in placerat leo aliquet.",
    image: "https://i.ibb.co/Wv2QVxb/yuvraj-singh-tm-Ayn-VA-ih-E-unsplash.jpg",
  },
];

const ServicesCarrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + services.length) % services.length
    );
  };

  const { name, description, image } = services[currentSlide];

  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute top-0 right-0 w-[45%] h-[100%] bg-[#000000b3]">
        {/**OVERLAY */}
      </div>
      <ul className="relative w-[45%] h-full right-0 p-4 space-y-2 rounded-tr-[5] rounded-br-[5] font-medium">
        <li className="text-[46px] 2xl:text-[60px] 4xl:text-[64px] font-semibold">
          {name}
        </li>
        <li className="text-[28px] 2xl:text-[30px] 4xl:text-[32px]">
          Tu Vehículo en Manos Expertas
        </li>
        <li className="text-[18px] 3xl:text-[20px]">
          <span>{description}</span>
        </li>
        <li className="absolute bottom-[5%] left-0 ml-4">
          <NoNeonButton fondo="none" text="Solicitar Servicio" />
        </li>
        <ul className="flex justify-center items-center absolute bottom-[5%] right-0 mr-4 space-x-4">
          <li
            className="w-[46px] 2xl:w-[52px] 4xl:w-[60px] h-[46px] 2xl:h-[52px] 4xl:h-[60px] text-[24px] 2xl:text-[28px] 4xl:text-[32px] rounded-full border-2 flex justify-center items-center cursor-pointer hover:text-ivory-white-700 hover:border-ivory-white-700"
            onClick={prevSlide}
          >
            <MdArrowBackIosNew />
          </li>
          <li
            className="w-[46px] 2xl:w-[52px] 4xl:w-[60px] h-[46px] 2xl:h-[52px] 4xl:h-[60px] text-[24px] 2xl:text-[28px] 4xl:text-[32px] rounded-full border-2 flex justify-center items-center cursor-pointer hover:text-ivory-white-700 hover:border-ivory-white-700"
            onClick={nextSlide}
          >
            <MdArrowForwardIos />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ServicesCarrousel;
