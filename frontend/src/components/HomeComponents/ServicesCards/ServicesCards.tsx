import CardService from "../../CardService1/CardService";
import services from "./services";

const ServicesCards = () => {
  const firstSet = services.slice(0, 2);
  const secondSet = services.slice(2, 4);

  return (
    <div className="space-y-8">
      <div className="flex">
        {firstSet.map((service, index) => (
          <CardService key={index} {...service} />
        ))}
      </div>

      <div className="flex">
        {secondSet.map((service, index) => (
          <CardService key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
