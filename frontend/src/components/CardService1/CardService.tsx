import NoNeonButton from "../NeonButton/NoNeonButton";

const CardService = () => {
  return (
    <div className="relative w-[50vw] h-[360px] bg-crimson-red-300 flex justify-evenly items-center space-x-0">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#0000004d]">
        {/**OVERLAY */}
      </div>
      <div className="relative w-[50%] h-full">
        <ul className="font-semibold p-4">
          <li className="text-[32px]">Service</li>
          <li className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel turpis velit. Sed sit amet lectus a metus pretium rhoncus.
            Integer malesuada ex id quam hendrerit, in placerat leo aliquet. Sed
            in ipsum ut nisl posuere pretium.
          </li>
          <li className="mt-2">
            <NoNeonButton text="Solicitar Servicios" />
          </li>
          <li className="absolute text-[72px] bottom-0 right-0 mr-1 text-crimson-red-50">
            01
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
