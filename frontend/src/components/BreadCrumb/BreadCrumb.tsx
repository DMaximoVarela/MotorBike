import { Breadcrumbs } from "@mui/material";
import { IoMdHome, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import style from "./BreadCrumb.module.css";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const isInicioPath =
    paths.length === 1 && paths[0].toLowerCase() === "inicio";

  return (
    <Breadcrumbs
      className={style.font}
      separator={
        !isInicioPath && <IoIosArrowForward className="text-[white]" />
      }
      aria-label="breadcrumb"
    >
      <Link to="/inicio">
        <IoMdHome className="text-[white] hover:text-ivory-white-500 text-[32px] pb-[2px]" />
      </Link>
      {paths.map((path, index) => (
        <Link
          key={index}
          to={`/${paths.slice(0, index + 1).join("/")}`}
          className="text-[white] hover:text-ivory-white-500"
        >
          {capitalize(decodeURIComponent(path.replace(/%20/g, " ")))}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
