import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import Banner from "../components/HomeComponents/Banner/Banner";
import HomeStore from "../components/HomeComponents/HomeStore/HomeStore";

const Home = () => {
  return (
    <div className="mx-auto my-1">
      <Breadcrumb />
      <br />
      <Banner />
      <br />
      <HomeStore />
      <br />
    </div>
  );
};

export default Home;
