import AboutHero from "../Components/AboutComponent/AboutHero";
import Certificate from "../Components/AboutComponent/Certificate";
import Education from "../Components/AboutComponent/Education";
import Footer from "../Components/Footer";
import Programs from "../Components/HomepageComponents/Programs";
import ShortMessage from "../Components/HomepageComponents/ShortMessage";
import NavLinks from "../Components/NavLinks";

const About = () => {
  return (
    <div>
      <NavLinks />
      <div className="flex justify-center h-auto">
        <div className="w-7xl h-auto flex flex-col">
          <AboutHero />
          <Education />
          <Certificate />
          <ShortMessage />
          <Programs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
