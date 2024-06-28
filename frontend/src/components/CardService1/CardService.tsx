import classNames from "classnames";
import NoNeonButton from "../NoNeonButton/NoNeonButton";

interface InfoService {
  id: number;
  name: string;
  fondo: string;
}

const CardService: React.FC<InfoService> = ({ id, name, fondo }) => {
  const isRed = fondo === "red";
  const isBlue = fondo === "blue";
  return (
    <div
      className={classNames(
        "relative w-[50vw] h-[360px] bg-crimson-red-300 flex justify-evenly items-center space-x-0 m-0",
        {
          "bg-crimson-red-300": isRed,
          "bg-indigo-blue-500": isBlue,
        }
      )}
    >
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#0000004d]">
        {/**OVERLAY */}
      </div>
      <div className="relative w-[50%] h-full">
        <ul className="font-semibold p-4">
          <li className="text-[30px] xl:text-[32px] 2xl:text-[34px] 4xl:text-[36px] ">
            {name}
          </li>
          <li className="text-[14px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel turpis velit. Sed sit amet lectus a metus pretium rhoncus.
            Integer malesuada ex id quam hendrerit, in placerat leo aliquet. Sed
            in ipsum ut nisl posuere pretium.
          </li>
          <li className="absolute mt-2 bottom-[5%] xl:bottom-[7%] left-0 ml-4">
            <NoNeonButton text="Solicitar Servicios" fondo={fondo} />
          </li>
          <li
            className={classNames(
              "absolute text-[52px] xl:text-[62px] 2xl:text-[72px] bottom-0 right-0 mr-2 text-crimson-red-50",
              {
                "text-crimson-red-50": isRed,
                "text-indigo-blue-50": isBlue,
              }
            )}
          >
            {id > 9 ? id : "0" + id}
          </li>
        </ul>
      </div>
      <div className="w-[50%] h-full">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="service image"
        />
      </div>
    </div>
  );
};

export default CardService;
