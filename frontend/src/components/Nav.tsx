import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex w-full font-semibold">
        <header className="flex w-full fixed items-center justify-between top-0 left-0 spa z-10 bg-black">
          <ul className="flex space-x-2">
            <Link className="text-red-400 hover:text-red-600" to={"/inicio"}>
              <li>Inicio</li>
            </Link>
            <Link className="text-red-400 hover:text-red-600" to={"/servicios"}>
              <li>Servicios</li>
            </Link>
            <Link className="text-red-400 hover:text-red-600" to={"/tienda"}>
              <li>Tienda</li>
            </Link>
            <Link className="text-red-400 hover:text-red-600" to={"/galeria"}>
              <li>Galería</li>
            </Link>
            <Link className="text-red-400 hover:text-red-600" to={"/contacto"}>
              <li>Contacto</li>
            </Link>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Nav;
