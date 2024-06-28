import ServicesCards from "../HomeComponents/ServicesCards/ServicesCards";
import NeonButton from "../NeonButton/NeonButton";

const HomeServices = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[36px] 2xl:text-[48px] 4xl:text-[64px] self-center w-[90vw] border-b-2 border-b-[white] mx-2">
        Servicios Principales
      </h2>
      <br />
      <ServicesCards />
      <ul className="flex flex-col justify-center items-center mt-[1.5em] space-y-2">
        <li className="text-[white] text-[40px] 2xl:text-[48px] 4xl:text-[56px]">
          <span>¿No Encuentras lo que Buscas?</span>
        </li>
        <li>
          <NeonButton text="Explorar Servicios" />
        </li>
      </ul>
      <br />
    </div>
  );
};

export default HomeServices;
