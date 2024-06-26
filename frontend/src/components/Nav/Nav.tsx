import { Link } from "react-router-dom";
import LogoMotorBike from "../../assets/LogoMotorBike.png";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="flex w-full font-sans font-semibold h-[70px] 2xl:h-[100px] 3xl:h-[110px] 4xl:h-[120px] 5xl:h-[130px]">
        <header className="flex w-full fixed items-center h-[70px] 2xl:h-[100px] 3xl:h-[110px] 4xl:h-[120px] 5xl:h-[130px] justify-between top-0 left-0 z-10 bg-charcoal-black-950 shadow-2xl lg:mt-[50px] 3xl:mt-[55px] 4xl:mt-[60px] 5xl:mt-[65px] text-crimson-red-300">
          <ul className="flex justify-center items-center space-x-[19px]">
            <li className="flex justify-start  h-[65px] 2xl:lg:h-[90px] 4xl:h-[106px] 5xl:h-[110px] lg:w-[90px] 4xl:w-[106px] 5xl:w-[110px] mx-6">
              <Link to={"/inicio"}>
                <img
                  className="w-full h-full object-contain hover:drop-shadow-crimson-sm"
                  src={LogoMotorBike}
                  alt="Logo"
                />
              </Link>
            </li>
            <Link
              className="text-[28px] 2xl:text-[32px] font-semibold hover:text-shadow-crimson"
              to={"/inicio"}
            >
              <li>Inicio</li>
            </Link>
            <Link
              className="text-[28px] 2xl:text-[32px] font-semibold hover:text-shadow-crimson"
              to={"/servicios"}
            >
              <li>Servicios</li>
            </Link>
            <Link
              className="text-[28px] 2xl:text-[32px] font-semibold hover:text-shadow-crimson"
              to={"/tienda"}
            >
              <li>Tienda</li>
            </Link>
            <Link
              className="text-[28px] 2xl:text-[32px] font-semibold hover:text-shadow-crimson"
              to={"/galeria"}
            >
              <li>Galería</li>
            </Link>
            <Link
              className="text-[28px] 2xl:text-[32px] font-semibold hover:text-shadow-crimson"
              to={"/contacto"}
            >
              <li>Contacto</li>
            </Link>
          </ul>

          <Link to={"/micuenta"}>
            <FaUser className="flex justify-end font-semibold mx-6 text-[28px] 2xl:text-[32px] hover:drop-shadow-crimson-sm" />
          </Link>
        </header>
      </div>
    </>
  );
};

export default Nav;
