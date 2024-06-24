import NeonButton from "../NeonButton/NeonButton";

const StoreSide = () => {
  return (
    <div className="flex justify-between items-center">
      <ul className="relative">
        <li className="flex justify-start items-center w-[50vw] h-[80vh] rounded-md bg-charcoal-black-500">
          <img
            className="absolute w-[65vw] max-w-none obj-contain drop-shadow-crimson-large"
            src="/src/assets/RepuestosLanding.png"
            alt="Repuestos"
          />
        </li>
      </ul>
      <ul className="text-[32px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[56px] 4xl:text-[64px] 5xl:text-[72px] font-semibold">
        <li className="mr-[1em]">
          Los <span className="text-crimson-red-300">Mejores Repuestos</span> al
          <br /> <span className="text-crimson-red-300">Mejor Precio!!</span>
        </li>
        <li>
          <NeonButton text="Ir a la Tienda" />
        </li>
      </ul>
    </div>
  );
};

export default StoreSide;
