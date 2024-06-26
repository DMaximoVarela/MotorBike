import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-charcoal-black-950 w-screen p-2 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-[16px] my-1">
            &copy; MotorBike® 2024 Todos los derechos reservados
          </p>
          <ul className="flex flex-wrap space-x-3 text-[14px] my-2 justify-center">
            <li>
              <Link
                to="/aviso_legal"
                className="text-[white] font-extralight hover:text-ivory-white-500 transition"
              >
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link
                to="/politica_de_privacidad"
                className="text-[white] font-extralight hover:text-ivory-white-500 transition"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                to="/politica_de_cookies"
                className="text-[white] font-extralight hover:text-ivory-white-500 transition"
              >
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="text-[white] font-extralight hover:text-ivory-white-500 transition"
              >
                Preguntas Frecuentes
              </Link>
            </li>
          </ul>
          <div className="ml-4 max-width-10 flex justify-center items-center my-1 text-[white] hover:text-ivory-white-500 cursor-pointer space-x-1">
            <span className="leading-3 text-[15px] font-light">Síguenos</span>
            <FaLinkedin className="text-[24px]" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
