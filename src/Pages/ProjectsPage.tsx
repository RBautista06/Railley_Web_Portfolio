import Footer from "../Components/Footer";
import NavLinks from "../Components/NavLinks";
import ProjectHero from "../Components/ProjectsComponent/ProjectHero";
import Showcase, {
  type ShowcaseData,
} from "../Components/ProjectsComponent/Showcase";

const showcaseProjects: ShowcaseData[] = [
  {
    media: [
      "/img/projects/programming/providence/providence.gif",
      "/img/projects/programming/providence/providenceLandingPage.jpg",
      "/img/projects/programming/providence/providencemap.jpeg",
      "/img/projects/programming/providence/providenceInternmentform.jpeg",
    ],
    steps: [
      "iLocate: An Online Record Management System with Email Notification for Providence Memorial Park-Antipolo",
      "iLocate is a digital record management system for Providence Memorial Park–Antipolo that allows users to quickly locate the burial lot of a deceased individual and receive timely updates via email notifications.",
      "This system is developed as a capstone project for the academic year 2024–2025.",
      "This system is developed as a capstone project for the academic year 2024–2025.",
    ],
    status: "Complete",
  },
];

const Projects = () => {
  return (
    <div className="">
      <NavLinks />
      <div className="flex justify-center h-auto ">
        <div className="w-7xl h-auto  flex flex-col">
          <ProjectHero />
          {showcaseProjects.map((project, index) => (
            <Showcase key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
