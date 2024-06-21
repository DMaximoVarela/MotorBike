import React from "react";

interface NeonButtonProps {
  text: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ text }) => {
  return (
    <button className="relative p-0 m-0 rounded-md bg-transparent border-2 border-[white]">
      <div className="relative font-semibold py-2 px-4 rounded-md mx-10">
        {/* Texto rojo detrás */}
        <span className="absolute top-0 left-0 w-full h-full text-[1.5rem]  text-crimson-red-300 blur-md flex items-center justify-center">
          {text}
        </span>
        <span className="absolute top-0 left-0 w-full h-full text-[1.5rem]  text-crimson-red-300 blur-md flex items-center justify-center">
          {text}
        </span>
        {/* Texto blanco delante */}
        <span className="relative text-[1.5rem]">{text}</span>
      </div>
      {/* Borde rojo exterior */}
      <span className="absolute inset-0 border-[3px] border-crimson-red-300 rounded-md blur-sm "></span>
    </button>
  );
};

export default NeonButton;
