import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import Banner from "../components/HomeComponents/Banner/Banner";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mx-2 my-1">
      <Breadcrumb />
      <br />
      <Banner />
    </div>
  );
};

export default Home;
