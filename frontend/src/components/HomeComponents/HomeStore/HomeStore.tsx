import ReplacementCards from "../ReplacementCards/ReplacementCards";
import NeonButton from "../../NeonButton/NeonButton";

const HomeStore = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[36px] 2xl:text-[48px] 4xl:text-[64px] self-center w-[90vw] border-b-2 border-b-[white] mx-2">
        Lo Más Vendido
      </h2>
      <br />
      <div>
        <ReplacementCards />
      </div>
      <ul className="flex flex-col justify-center items-center mt-[1.5em] space-y-2">
        <li className="text-[white] text-[40px] 2xl:text-[48px] 4xl:text-[56px]">
          <span>¿No Encuentras lo que Buscas?</span>
        </li>
        <li>
          <NeonButton text="Ir a la Tienda" />
        </li>
      </ul>
    </div>
  );
};

export default HomeStore;
