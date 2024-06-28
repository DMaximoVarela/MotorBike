import style from "./NoNeonButton.module.css";

interface NoNeonButtonProps {
  text: string;
  fondo: string;
}

const NoNeonButton: React.FC<NoNeonButtonProps> = ({ text, fondo }) => {
  return (
    <button className={style[fondo]}>
      <div className="relative font-semibold py-1 px-6 rounded-md whitespace-nowrap">
        <span className="relative text-[16px]  2xl:text-[17px]  4xl:text-[18px] flex items-center justify-center">
          {text}
        </span>
      </div>
    </button>
  );
};

export default NoNeonButton;
