import Footer from "../Components/Footer";
import NavLinks from "../Components/NavLinks";
import ProjectHero from "../Components/ProjectsComponent/ProjectHero";
import Showcase from "../Components/ProjectsComponent/Showcase";

const Projects = () => {
  return (
    <div className="">
      <NavLinks />
      <div className="flex justify-center h-auto ">
        <div className="w-7xl h-auto  flex flex-col">
          <ProjectHero />
          <Showcase />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects;
