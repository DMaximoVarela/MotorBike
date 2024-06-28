import ServicesCards from "../HomeComponents/ServicesCards/ServicesCards";

const HomeServices = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[36px] 2xl:text-[48px] 4xl:text-[64px] self-center w-[90vw] border-b-2 border-b-[white] mx-2">
        Servicios Principales
      </h2>
      <br />
      <ServicesCards />
    </div>
  );
};

export default HomeServices;
