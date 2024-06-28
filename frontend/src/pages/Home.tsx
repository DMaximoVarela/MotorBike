import Breadcrumb from "../components/BreadCrumb/BreadCrumb";
import Banner from "../components/HomeComponents/Banner/Banner";
import HomeStore from "../components/HomeComponents/HomeStore/HomeStore";
import HomeServices from "../components/HomeServices/HomeServices";

const Home = () => {
  return (
    <div className="mx-2 my-1">
      <Breadcrumb />
      <br />
      <Banner />
      <br />
      <HomeStore />
      <br />
      <HomeServices />
      <br />
    </div>
  );
};

export default Home;
