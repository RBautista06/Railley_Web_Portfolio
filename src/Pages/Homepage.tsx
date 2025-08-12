import Footer from "../Components/Footer";
import HeroContainer from "../Components/HomepageComponents/HeroContainer";
import NavLinks from "../Components/NavLinks";
const Homepage = () => {
  return (
    <div className="">
      <NavLinks />
      <div className="flex justify-center h-auto ">
        {/* <div className={`${styles.backGroundContainer} text-lg w-full`}>
          <div className={`${styles.backGroundImage} text-lg w-full`}></div>
        </div> */}
        <div className="w-7xl h-auto  flex flex-col">
          <HeroContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
