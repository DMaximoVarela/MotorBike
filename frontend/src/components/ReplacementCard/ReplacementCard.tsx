import Price from "./Price/Price";
import { FaRegBookmark } from "react-icons/fa6";
import { FaCartPlus, FaBookmark } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import classNames from "classnames";
import { useState } from "react";

interface CardProps {
  name: string;
  marca: string;
  imageUrl: string;
  puntuacionProm: number;
  cantReseñas: number;
  precio: number;
  descuento: boolean;
  fondo: string;
}
// https://i.ibb.co/LnnX8JF/pngwing-com-1.png
const ReplacementCard: React.FC<CardProps> = ({
  name,
  marca,
  imageUrl,
  puntuacionProm,
  cantReseñas,
  precio,
  descuento,
  fondo,
}) => {
  const isRed = fondo === "red";
  const isBlue = fondo === "blue";

  const [isSave, setIsSave] = useState(false);

  const saveReplacement = () => {
    if (isSave == false) setIsSave(true);
    else if (isSave == true) setIsSave(false);
  };

  return (
    <div
      className={classNames(
        "relative flex flex-col justify-center items-center w-[160px] 2xl:w-[200px] 4xl:w-[240px] h-[360px] 2xl:h-[400px] 4xl:h-[440px] text-[black] bg-[white] rounded-[9px] ",
        {
          "drop-shadow-crimson-light": isRed,
          "drop-shadow-indigo-blue-light": isBlue,
        }
      )}
    >
      <div
        className={classNames(
          "absolute w-[160px] 2xl:w-[200px] 4xl:w-[240px] h-[180px] 2xl:h-[200px] 4xl:h-[220px] top-0 left-0 rounded-t-[8px]",
          {
            "bg-crimson-red-600": isRed,
            "bg-indigo-blue-700": isBlue,
          }
        )}
      >
        <img
          className="w-full h-full object-contain"
          src={imageUrl}
          alt="Replacement"
        />
        <div
          className="absolute bg-[#00000080] flex justify-center items-center rounded-full w-[28px] 2xl:w-[32px] 4xl:w-[36px] h-[28px] 2xl:h-[32px] 4xl:h-[36px] bottom-0 right-0 m-2 cursor-pointer"
          onClick={saveReplacement}
        >
          {isSave ? (
            <FaBookmark className="p-1 text-[24px] 2xl:text-[28px] 4xl:text-[32px] text-[white] hover:text-ivory-white-700" />
          ) : (
            <FaRegBookmark className="p-1 text-[24px] 2xl:text-[28px] 4xl:text-[32px] text-[white] hover:text-ivory-white-700" />
          )}
        </div>
      </div>
      <ul className="relative self-start mt-[120px] ml-2">
        <li className="text-[18px] 2xl:text-[20px] 4xl:text-[22px] font-medium">
          {name}
        </li>
        <li className="text-[15px] 2xl:text-[16px] 4xl:text-[18px] font-normal opacity-95">
          {marca}
        </li>
        <li className="flex justify-center items-center space-x-1 m-0">
          <Stack spacing={0}>
            <Rating
              name="half-rating-read"
              defaultValue={puntuacionProm}
              precision={0.5}
              readOnly
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "black",
                  fontSize: "22px",
                },
                "& .MuiRating-iconEmpty": {
                  fontSize: "22px",
                },
              }}
            />
          </Stack>
          <span className="text-[15px] 2xl:text-[16px] 4xl:text-[18px] opacity-85 font-light">
            ({cantReseñas})
          </span>
        </li>
        <li className="mt-1">
          <Price precio={precio} fondo={fondo} />
        </li>
        <li>{descuento ? descuento : ""}</li>
      </ul>
      <div
        className={classNames(
          "absolute m-2 flex justify-center items-center w-[35px] 2xl:w-[40px] 4xl:w-[50px] h-[35px] 2xl:h-[40px] 4xl:h-[50px] rounded-full text-[white] text-[18px] 2xl:text-[25px] 4xl:text-[30px] bottom-0 right-0 cursor-pointer",
          {
            "bg-crimson-red-300 drop-shadow-crimson-light hover:bg-crimson-red-500":
              isRed,
            "bg-indigo-blue-500 drop-shadow-indigo-blue-light hover:bg-indigo-blue-600":
              isBlue,
          }
        )}
      >
        <FaCartPlus />
      </div>
    </div>
  );
};

export default ReplacementCard;
