import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Oferta from "./Oferta/Oferta";
import Service from "./Service/Service";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <MdArrowBackIosNew className="text-[white] text-[46px] 2xl:text-[56px] 3xl:text-[64px] hover:text-ivory-white-500 cursor-pointer" />
      <div className="flex justify-between items-center px-8 bg-charcoal-black-800 rounded-md mx-[1em] p-2 w-[85vw] 3xl:w-[90vw] h-[210px] 2xl:h-[235px] 3xl:h-[285px]">
        <Service service="SERVICE" />
        <Oferta fondo="red" dias="SABADOS" descuentoUno={5} descuentoDos={10} />
      </div>
      <MdArrowForwardIos className="text-[white] text-[46px] 2xl:text-[56px] 3xl:text-[64px] hover:text-ivory-white-500 cursor-pointer" />
    </div>
  );
};

export default Banner;
