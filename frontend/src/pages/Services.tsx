import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import ServicesCarrousel from "../components/ServicesCarrousel/ServicesCarrousel";
import CardService from "../components/CardService2/CardService";

const Services = () => {
  return (
    <div className="mx-auto my-1 flex flex-col justify-center items-center">
      <Breadcrumb />
      <br />
      <div>
        <ServicesCarrousel />
      </div>
      <br />
      <CardService />
      <br />
    </div>
  );
};

export default Services;
