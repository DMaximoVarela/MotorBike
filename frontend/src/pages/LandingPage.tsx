import ServicesSide from "../components/LandingPageComponents/ServicesSide";
import StoreSide from "../components/LandingPageComponents/StoreSide";
import About from "../components/LandingPageComponents/About";

const LandingPage = () => {
  return (
    <>
      <div>
        <ServicesSide />
        <br />
        <br />
        <StoreSide />
        <br />
        <br />
        <About />
        <br />
      </div>
    </>
  );
};

export default LandingPage;
