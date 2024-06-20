import { Link } from "react-router-dom";
import LogoMotorBike from "../../assets/LogoMotorBike.png";

const Nav = () => {
  return (
    <>
      <div className="flex w-full font-semibold lg:h-[100px] 3xl:h-[110px] 4xl:h-[120px] 5xl:h-[130px]">
        <header className="flex w-full fixed items-center lg:h-[100px] 3xl:h-[110px] 4xl:h-[120px] 5xl:h-[130px] justify-between top-0 left-0 spa z-10 bg-charcoal-black-950 shadow-2xl">
          <ul className="flex justify-center items-center space-x-[19px]">
            <li className="flex justify-start lg:h-[90px] 4xl:h-[106px] 5xl:h-[110px] lg:w-[90px] 4xl:w-[106px] 5xl:w-[110px] mx-6">
              <Link to={"/inicio"}>
                <img
                  className="w-full h-full object-contain"
                  src={LogoMotorBike}
                  alt="Logo"
                />
              </Link>
            </li>
            <Link
              className="text-crimson-red-300 hover:text-crimson-red-400 text-[32px] font-semibold"
              to={"/inicio"}
            >
              <li>Inicio</li>
            </Link>
            <Link
              className="text-crimson-red-300 hover:text-crimson-red-400 text-[32px] font-semibold"
              to={"/servicios"}
            >
              <li>Servicios</li>
            </Link>
            <Link
              className="text-crimson-red-300 hover:text-crimson-red-400 text-[32px] font-semibold"
              to={"/tienda"}
            >
              <li>Tienda</li>
            </Link>
            <Link
              className="text-crimson-red-300 hover:text-crimson-red-400 text-[32px] font-semibold"
              to={"/galeria"}
            >
              <li>Galería</li>
            </Link>
            <Link
              className="text-crimson-red-300 hover:text-crimson-red-400 text-[32px] font-semibold"
              to={"/contacto"}
            >
              <li>Contacto</li>
            </Link>
          </ul>

          <div className="flex justify-end min-h-[36,57px] min-w-[32px] mx-6">
            <Link to={"/micuenta"}>
              <img
                className="w-full h-full object-contain"
                src="/src/assets/user-solid 1.svg"
                alt="user-icon"
              />
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Nav;
