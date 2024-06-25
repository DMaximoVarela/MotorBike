import style from "./Oferta.module.css";
import Percent from "./Percent/Percent";

interface Oferta {
  fondo: string;
  dias: string;
  descuentoUno: number;
  descuentoDos: number;
}

const Oferta: React.FC<Oferta> = ({
  fondo,
  dias,
  descuentoUno,
  descuentoDos,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex flex-col justify-center items-center font-semibold text-[white]">
        <li className="text-[30px] 2xl:text-[40px] 3xl:text-[48px] text-shadow-black">
          OFERTA!!
        </li>
        <li className="text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-shadow-black">
          TODOS LOS {dias}
        </li>
      </ul>
      <div className={style[fondo]}>
        <ul className="flex flex-col justify-center items-center mr-4">
          <li className="text-[74px] 2xl:text-[84px] 3xl:text-[92px] h-[74px] 2xl:h-[84px] 3xl:h-[92px] flex justify-center items-center font-bold text-[white] relative">
            <div className="relative">
              {descuentoUno}
              <div className="absolute bottom-0 right-1 translate-x-1/2 translate-y-1/2 mb-6 3xl:mb-8">
                <Percent fondo={fondo} />
              </div>
            </div>
            <span className="text-[20px] 2xl:text-[24px] 3xl:text-[32px] font-semibold mt-6 3xl:mt-8 mx-2">
              o
            </span>
            <div className="relative">
              {descuentoDos}
              <div className="absolute bottom-0 right-1 translate-x-1/2 translate-y-1/2 mb-6 3xl:mb-8">
                <Percent fondo={fondo} />
              </div>
            </div>
          </li>
          <li className="text-[16px] 3xl:text-[24px] text-[white] font-semibold">
            DE DESCUENTO
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center space-y-2 ml-4">
          <li className="w-[58px] 2xl:w-[64px] 3xl:w-[72px] h-[24xp] 3xl:h-[32px] flex justify-center items-center rounded-sm bg-[white]">
            <img
              className="object-contain p-1"
              src="/src/assets/Visa-logo.svg"
              alt="visa"
            />
          </li>
          <li className="w-[58px] 2xl:w-[64px] 3xl:w-[72px] h-[24xp] 3xl:h-[32px] flex justify-center items-center rounded-sm bg-[white]">
            <img
              className="object-contain p-1"
              src="/src/assets/Mastercard-logo.svg"
              alt="mastercard"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Oferta;
