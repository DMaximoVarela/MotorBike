interface Precio {
  precio: number;
}

const Price: React.FC<Precio> = ({ precio }) => {
  return (
    <div className="w-fit px-1 flex justify-start items-center bg-crimson-red-300 drop-shadow-crimson-light rounded">
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
