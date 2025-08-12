import HeroContainer from "../Components/HomepageComponents/HeroContainer";
import NavLinks from "../Components/NavLinks";
const Homepage = () => {
  return (
    <div className="">
      <NavLinks />
      <div className="flex justify-center h-screen ">
        {/* <div className={`${styles.backGroundContainer} text-lg w-full`}>
          <div className={`${styles.backGroundImage} text-lg w-full`}></div>
        </div> */}
        <div className="w-7xl h-screen  flex flex-col">
          <HeroContainer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
