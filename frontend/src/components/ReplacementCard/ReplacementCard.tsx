import Price from "./Price";
import { FaRegBookmark } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";

interface CardProps {
  name: string;
  marca: string;
  imageUrl: string;
  puntuacionProm: number;
  cantReseñas: number;
  precio: number;
  descuento: boolean;
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
}) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-[240px] h-[440px] text-[black] bg-[white] rounded-[9px] drop-shadow-crimson-light">
      <div className="absolute bg-crimson-red-600 w-[240px] h-[220px] top-0 left-0 rounded-t-[8px]">
        <img
          className="w-full h-full object-contain"
          src={imageUrl}
          alt="Replacement"
        />
        <div className="absolute bg-[#00000080] flex justify-center items-center rounded-full w-[36px] h-[36px] bottom-0 right-0 m-2 cursor-pointer">
          <FaRegBookmark className="p-1 text-[32px] text-[white]" />
        </div>
      </div>
      <ul className="relative self-start mt-[120px] ml-2">
        <li className="text-[22px] font-medium">{name}</li>
        <li className="text-[18px] font-normal opacity-95">{marca}</li>
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
          <span className="text-[18px] opacity-85 font-light">
            ({cantReseñas})
          </span>
        </li>
        <li className="mt-1">
          <Price precio={precio} />
        </li>
        <li>{descuento ? descuento : ""}</li>
      </ul>
      <div className="absolute m-2 flex justify-center items-center w-[50px] h-[50px] rounded-full bg-crimson-red-300 drop-shadow-crimson-light text-[white] text-[30px] bottom-0 right-0 cursor-pointer">
        <FaCartPlus />
      </div>
    </div>
  );
};

export default ReplacementCard;
