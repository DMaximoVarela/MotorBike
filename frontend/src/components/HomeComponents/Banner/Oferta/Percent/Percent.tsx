import style from "./Percent.module.css";

interface Fondo {
  fondo: string;
}

const Percent: React.FC<Fondo> = ({ fondo }) => {
  return (
    <div className="w-[16px] h-[16px] flex justify-center items-center bg-crimson-red-500 rounded-[2px]">
      <div className={style[fondo]}>
        <span className="text-[white] text-[12px] font-semibold">%</span>
      </div>
    </div>
  );
};

export default Percent;
