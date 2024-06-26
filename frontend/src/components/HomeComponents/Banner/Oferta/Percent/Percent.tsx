import style from "./Percent.module.css";

interface Fondo {
  fondo: string;
}

const Percent: React.FC<Fondo> = ({ fondo }) => {
  return (
    <div className={style[fondo]}>
      <div className="w-[14px] h-[14px] flex justify-center items-center bg-[transparent] border-[1px] border-[white] rounded-[1xpx]">
        <span className="text-[white] text-[12px] font-semibold">%</span>
      </div>
    </div>
  );
};

export default Percent;
