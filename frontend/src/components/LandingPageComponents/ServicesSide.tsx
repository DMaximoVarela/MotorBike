import NeonButton from "../NeonButton/NeonButton";

const ServicesSide = () => {
  return (
    <div className="flex justify-between items-center space-x-2">
      <ul className="ml-[1em] text-[32px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[56px] 4xl:text-[64px] 5xl:text-[72px] font-semibold">
        <li>
          Mejores{" "}
          <span className="text-crimson-red-300">
            Servicios de <br /> Reparación
          </span>{" "}
          de la Ciudad!!
        </li>
        <li>
          <NeonButton text="Solicitar Servicios" />
        </li>
      </ul>
      <ul className="relative">
        <li className="flex justify-end items-center w-[50vw] h-[80vh] rounded-md bg-charcoal-black-500">
          <img
            className="absolute w-[55vw] max-w-none obj-contain drop-shadow-crimson-large"
            src="/src/assets/Red Car.png"
            alt="Car"
          />
        </li>
      </ul>
    </div>
  );
};

export default ServicesSide;
