import Footer from "../Components/Footer";
import Programs from "../Components/HomepageComponents/Programs";
import ShortMessage from "../Components/HomepageComponents/ShortMessage";
import NavLinks from "../Components/NavLinks";
import ProjectHero from "../Components/ProjectsComponent/ProjectHero";
import Showcase, { type ShowcaseData } from "../Components/Showcase";

const showcaseProjects: ShowcaseData[] = [
  {
    media: [
      "/img/projects/programming/providence/providenceLandingPage.jpg",
      "/img/projects/programming/providence/providencemap.jpeg",
      "/img/projects/programming/providence/providenceInternmentform.jpeg",
      "/vids/providence.mp4",
    ],
    steps: [
      "iLocate: An Online Record Management System with Email Notification for Providence Memorial Park-Antipolo",
      "iLocate is a digital record management system for Providence Memorial Park–Antipolo that allows users to quickly locate the burial lot of a deceased individual and receive timely updates via email notifications.",
      "This system is developed as a capstone project for the academic year 2024–2025.",
    ],
    repository: "https://github.com/RBautista06/Capstone",
    status: "Complete",
    languages: [
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
      "/img/logo/php.png",
    ],
  },

  {
    media: [
      "/img/projects/programming/cpse/cpsehomepage.jpeg",
      "/img/projects/programming/cpse/cpselanding.jpeg",
      "/img/projects/programming/cpse/cpse barcodegen.jpeg",
      "/vids/cpse.mp4",
    ],
    steps: [
      "A Web-based Sales and Inventory Management System with Barcode Scanner for CPSE Enterprises.",
      "A system that helps track inventory, manage transactions, and streamline operations for improved efficiency.",
      "Developed as a SIAA project for the academic year 2023–2024.",
    ],
    repository: "https://github.com/RBautista06/SIAA_CPSE",
    status: "Complete",
    languages: [
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
      "/img/logo/php.png",
    ],
  },
  {
    media: [
      "/img/projects/programming/pisces/Pisces1.png",
      "/img/projects/programming/pisces/pisces2.png",
      "/img/projects/programming/pisces/pisces3.png",
    ],
    steps: [
      "PISCES - PEZA Information System on Compliance to Environmental Standards",
      "A web-based platform developed to monitor environmental compliance, automate reporting, and support sustainable practices for PEZA-registered enterprises.",
      "Completed as an OJT project with 500 hours of hands-on experience from February to May 2025, including enhanced analytics, real-time monitoring, and improved user experience.",
    ],
    repository: "",
    status: "Complete",
    languages: [
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
      "/img/logo/vue.png",
      "/img/logo/vuetify.png",
      "/img/logo/pinia.png",
    ],
  },
];

const showcasePersonalProjects: ShowcaseData[] = [
  {
    media: [
      "/img/projects/programming/pokedex/landing.png",
      "/img/projects/programming/pokedex/homepage.png",
      "/img/projects/programming/pokedex/evolutiomChart.png",
      "/img/projects/programming/pokedex/height and evolutionchart.png",

      "/vids/pokedex.mp4",
    ],
    steps: [
      "Pokedex",
      "A web application that fetches and displays Pokémon data from a public API, including stats, types, and abilities.",
      "Developed in June 2025 as a practice project to improve API integration skills and data handling in modern web development.",
    ],
    repository: "https://github.com/RBautista06/Pokedex",
    status: "Complete",
    languages: [
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
    ],
  },
  {
    media: [
      "/img/projects/programming/gameVault/LandingPage.png",
      "/img/projects/programming/gameVault/Selection.png",
      "/img/projects/programming/gameVault/details.png",
      "/img/projects/programming/gameVault/details2.png",
      "/vids/gamevault.mp4",
    ],
    steps: [
      "GameVault",
      "A web application that allows users to search and explore video games, displaying detailed information fetched from a public games API.",
      "Developed in July 2025 as a practice project to strengthen API fetching, data handling, and TypeScript skills.",
    ],
    repository: "https://github.com/RBautista06/GameVault",
    status: "Complete",
    languages: [
      "/img/logo/react.png",
      "/img/logo/css.png",
      "/img/logo/tailwind.png",
      "/img/logo/ts.png",
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
    ],
  },
  {
    media: [
      "/img/projects/programming/realtimechat/chat_landingPage.png",
      "/img/projects/programming/realtimechat/homepage.png",
      "/img/projects/programming/realtimechat/chatsettings.png",

      "/vids/realtimeChat.mp4",
    ],
    steps: [
      "Real Time Chat App",
      "Designed to explore and apply real-time web technologies, enabling users to send, receive, and search messages instantly across devices.",
      "Developed as a personal learning project in July 2025 to gain hands-on experience with the MERN stack, Typescript and Socket.IO.",
    ],
    repository: "https://github.com/RBautista06/real-time-chat",
    status: "Complete",
    languages: [
      "/img/logo/react.png",
      "/img/logo/ts.png",
      "/img/logo/express.png",
      "/img/logo/nodejs.png",
      "/img/logo/zustand.png",
      "/img/logo/tailwind.png",
      "/img/logo/mongodb.png",
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
    ],
  },
  {
    media: [
      "/img/projects/programming/Lynx/LandingPage.png",
      "/img/projects/programming/Lynx/loginPage.png",
      "/img/projects/programming/Lynx/Profile.png",
      "/img/projects/programming/Lynx/SignupPage.png",
    ],
    steps: [
      "Lynx - Social Media",
      "A social media platform where users can share posts, engage with others through likes and comments, and connect in real time.",
      "Developed as a personal learning project in July 2025 to gain hands-on experience with the MERN stack, TypeScript, Redux, and Socket.IO.",
    ],

    repository: "https://github.com/RBautista06/Lynx",
    status: "Ongoing",
    languages: [
      "/img/logo/react.png",
      "/img/logo/ts.png",
      "/img/logo/express.png",
      "/img/logo/nodejs.png",
      "/img/logo/redux.png",
      "/img/logo/tailwind.png",
      "/img/logo/mongodb.png",
      "/img/logo/html-5.png",
      "/img/logo/css.png",
      "/img/logo/js.png",
    ],
  },
];
const Projects = () => {
  return (
    <div>
      <NavLinks />
      <div className="flex justify-center h-auto">
        <div className="w-7xl h-auto flex flex-col">
          <ProjectHero />
          <div
            className="p-4 rounded-lg mt-3 w-full bg-base-300"
            id="school-projects">
            <span className="font-bold text-lg">School Projects</span>
          </div>
          {showcaseProjects.map((project, index) => (
            <Showcase key={index} componentIndex={index} {...project} />
          ))}
          <div
            className="p-4 rounded-lg mt-3 w-full bg-base-300"
            id="personal-projects">
            <span className="font-bold text-lg">Personal Projects</span>
          </div>
          {showcasePersonalProjects.map((project, index) => (
            <Showcase key={index} componentIndex={index} {...project} />
          ))}
          <ShortMessage />
          <Programs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
