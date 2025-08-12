import Footer from "../Components/Footer";
import HeroContainer from "../Components/HomepageComponents/HeroContainer";
import Programs from "../Components/HomepageComponents/Programs";
import ShortMessage from "../Components/HomepageComponents/ShortMessage";
import SoftSkills from "../Components/HomepageComponents/SoftSkills";
import TechSkills from "../Components/HomepageComponents/TechSkills";
import NavLinks from "../Components/NavLinks";
const Homepage = () => {
  return (
    <div className="">
      <NavLinks />
      <div className="flex justify-center h-auto ">
        <div className="w-7xl h-auto  flex flex-col">
          <HeroContainer />
          <TechSkills />
          <SoftSkills />
          <ShortMessage />
          <Programs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
