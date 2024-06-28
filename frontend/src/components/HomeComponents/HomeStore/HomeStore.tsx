import ReplacementCards from "../ReplacementCards/ReplacementCards";

const HomeStore = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[36px] 2xl:text-[48px] 4xl:text-[64px] self-center w-[90vw] border-b-2 border-b-[white] mx-2">
        Lo Más Vendido
      </h2>
      <br />
      <div>
        <ReplacementCards />
      </div>
    </div>
  );
};

export default HomeStore;
