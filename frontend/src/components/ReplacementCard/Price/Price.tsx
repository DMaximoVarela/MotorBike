import classNames from "classnames";

interface Precio {
  precio: number;
  fondo: string;
}

const Price: React.FC<Precio> = ({ precio, fondo }) => {
  const isRed = fondo === "red";
  const isBlue = fondo === "blue";

  return (
    <div
      className={classNames(
        "w-fit px-1 flex justify-start items-center rounded text-[16px] 2xl:text-[18px] 4xl:text-[20px]",
        {
          "bg-crimson-red-300 drop-shadow-crimson-light": isRed,
          "bg-indigo-blue-500 drop-shadow-indigo-blue-light": isBlue,
        }
      )}
    >
      <ul className="flex justify-center items-center text-[white] space-x-1">
        <li className="font-extralight">
          <span>AR$</span>
        </li>
        <li className="font-medium">
          <span>{precio}</span>
        </li>
      </ul>
    </div>
  );
};

export default Price;
