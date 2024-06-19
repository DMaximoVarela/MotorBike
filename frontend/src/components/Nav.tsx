import { Link } from "react-router-dom";
import LogoMotorBike from "../assets/LogoMotorBike.png";

const Nav = () => {
  return (
    <>
      <div className="flex w-full font-semibold h-[139px]">
        <header className="flex w-full fixed items-center h-[139px] justify-between top-0 left-0 spa z-10 bg-charcoal-black-950">
          <ul className="flex justify-center items-center space-x-[19px]">
            <li className="flex justify-start mr-[38px] ml-[140px]">
              <Link to={"/inicio"}>
                <img
                  className="h-[120px] w-[120px] object-contain"
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

          <div className="flex justify-end ml-[38px] mr-[100px]">
            <Link to={"/micuenta"}>
              <img
                className="h-[36,57px] w-[32px] object-contain"
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
