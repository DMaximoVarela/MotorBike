interface NeonButtonProps {
  text: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ text }) => {
  return (
    <button className="relative p-0 m-0 rounded-md bg-transparent border-2 border-[white]">
      <div className="relative font-semibold py-1 px-4 rounded-md mx-10">
        {/* Texto rojo detrás */}
        <span className="absolute top-0 left-0 w-full h-full text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.5rem] 5xl:text-[3rem]  text-crimson-red-300 blur-md flex items-center justify-center">
          {text}
        </span>
        <span className="absolute top-0 left-0 w-full h-full text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.5rem] 5xl:text-[3rem]  text-crimson-red-300 blur-md flex items-center justify-center">
          {text}
        </span>
        {/* Texto blanco delante */}
        <span className="relative text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.5rem] 5xl:text-[3rem] flex items-center justify-center">
          {text}
        </span>
      </div>
      {/* Borde rojo exterior */}
      <span className="absolute inset-0 border-[3px] border-crimson-red-300 rounded-md blur-sm "></span>
    </button>
  );
};

export default NeonButton;
