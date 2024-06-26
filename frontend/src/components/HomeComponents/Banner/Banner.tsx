import { useState, useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Service from "./Service/Service";
import Oferta from "./Oferta/Oferta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Banner.module.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const offers = [
    {
      service: "SERVICE",
      fondo: "red",
      dias: "SABADOS",
      descuentoUno: 5,
      descuentoDos: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1593699199342-59b40e08f0ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      service: "REPARACION",
      fondo: "blue",
      dias: "DOMINGOS",
      descuentoUno: 8,
      descuentoDos: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      service: "MANTENIMIENTO",
      fondo: "yellow",
      dias: "LUNES",
      descuentoUno: 7,
      descuentoDos: 12,
      imageUrl:
        "https://images.unsplash.com/photo-1595787142842-7404bc60470d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      <div
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={handlePrev}
      >
        <MdArrowBackIosNew className="text-[46px] 2xl:text-[56px] 3xl:text-[64px] hover:text-ivory-white-500" />
      </div>
      <Slider ref={sliderRef} {...settings} className={styles.bannerContainer}>
        {offers.map((offer, index) => (
          <div key={index} className="relative">
            <div
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${offer.imageUrl})` }}
            ></div>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <Service service={offer.service} />
              <Oferta {...offer} />
              <ul className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-[.5em] 2xl:text-[.7em] 3xl:text-[1em] flex space-x-2">
                {offers.map((_, i) => (
                  <li key={i}>
                    {i === currentSlide ? <FaCircle /> : <FaRegCircle />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={handleNext}
      >
        <MdArrowForwardIos className="text-[46px] 2xl:text-[56px] 3xl:text-[64px] hover:text-ivory-white-500" />
      </div>
    </div>
  );
};

export default Banner;
