import { FaLocationDot, FaPercent } from "react-icons/fa6";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";

const NavContact = () => {
  return (
    <>
      <div className="flex w-full font-normal lg:h-[50px] 3xl:h-[55px] 4xl:h-[60px] 5xl:h-[65px]">
        <header className="flex w-full fixed items-center lg:h-[50px] 3xl:h-[55px] 4xl:h-[60px] 5xl:h-[65px] justify-between top-0 left-0 spa z-10 bg-charcoal-black-900 shadow-2xl">
          <ul className="flex justify-center items-center space-x-[19px] ml-8">
            <li className="flex items-center justify-start space-x-2 lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px] text-center">
              <FaLocationDot className="text-crimson-red-300" />
              <h4>Córdoba, Argentina</h4>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <FaPhoneAlt className="text-crimson-red-300" />
              <h4>+123-456-7890</h4>
            </li>
          </ul>

          <ul className="flex justify-center items-center space-x-[19px] mr-8 lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 4xl:text-[24px] text-center">
            <li className="flex items-center justify-start space-x-2">
              <FaPercent className="text-crimson-red-300" />
              <h4>Descuento del 25% en todos los servicios</h4>
            </li>
            <li className="flex justify-center">
              <h4>|</h4>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <FaRegClock className="text-crimson-red-300" />
              <h4>08:00AM - 18:00PM</h4>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default NavContact;
