import HeroContainer from "../Components/HomepageComponents/HeroContainer";
import NavLinks from "../Components/NavLinks";
import styles from "../Components/HomepageComponents/heroContainer.module.css";
const Homepage = () => {
  return (
    <div className="border">
      <NavLinks />
      <div className="flex justify-center h-screen border">
        {/* <div className={`${styles.backGroundContainer} text-lg w-full`}>
          <div className={`${styles.backGroundImage} text-lg w-full`}></div>
        </div> */}
        <div className="w-7xl h-screen border flex flex-col">
          <HeroContainer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
