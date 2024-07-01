import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import ServicesCarrousel from "../components/ServicesCarrousel/ServicesCarrousel";

const services = [
  {
    name: "Reparación de Autos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer malesuada ex id quam hendrerit, in placerat leo aliquet.",
    image:
      "https://images.unsplash.com/photo-1507578196479-eb569f365f5b?q=80&w=1533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Diágnostico de Motor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer malesuada ex id quam hendrerit, in placerat leo aliquet.",
    image: "https://i.ibb.co/rZ59C9Y/paul-cisneros-vzw6mt-O7m-Yw-unsplash.jpg",
  },
  {
    name: "Alineación de Ruedas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis velit. Sed sit amet lectus a metus pretium rhoncus. Integer malesuada ex id quam hendrerit, in placerat leo aliquet.",
    image: "https://i.ibb.co/Wv2QVxb/yuvraj-singh-tm-Ayn-VA-ih-E-unsplash.jpg",
  },
];

const Services = () => {
  return (
    <div className="mx-auto my-1 flex flex-col justify-center items-center">
      <Breadcrumb />
      <br />
      <div>
        <ServicesCarrousel {...services[2]} />
      </div>
      <br />
    </div>
  );
};

export default Services;
