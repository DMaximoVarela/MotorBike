interface Servicio {
  service: string;
}

const Service: React.FC<Servicio> = ({ service }) => {
  return (
    <div className="flex flex-col justify-center items-center font-semibold">
      <span className="text-[38px] 2xl:text-[48px] 3xl:text-[56px] ">
        {service}
      </span>
      <button className="w-[198px] 2xl:w-[204px] 3xl:w-[212px] text-[20px] 2xl:text-[24px] 3xl:text-[32px] border-[1px] rounded-[20px] 2xl:rounded-[24px] 3xl:rounded-[32px] border-[white]">
        Solicitar
      </button>
    </div>
  );
};

export default Service;
