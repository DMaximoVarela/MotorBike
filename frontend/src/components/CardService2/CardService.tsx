import { FaArrowRight } from "react-icons/fa";
import style from "./CardService.module.css";

const CardService = () => {
  return (
    <div className="w-[435px] h-[460px] bg-charcoal-black-950 rounded-[25px]">
      <img
        className="w-full h-[50%] object-cover rounded-t-[25px] border-b-[3px] border-b-crimson-red-300"
        src="https://i.ibb.co/fqPwHmS/auto-1821648-1280.jpg"
        alt="service-img"
      />
      <ul className="p-2 font-semibold">
        <li className="text-[32px]">Service</li>
        <li className="text-[26px] mb-1">Mantenimiento General</li>
        <li className="text-[16px] opacity-70 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel turpis velit. Sed sit amet lectus a metus pretium rhoncus.
        </li>
        <li className={style.more}>
          <span>VER MÁS</span>
          <FaArrowRight className={style.arrow} />
        </li>
      </ul>
    </div>
  );
};

export default CardService;
