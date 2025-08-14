import EditingHero from "../Components/EditingComponent/EditingHero";
import Footer from "../Components/Footer";
import Programs from "../Components/HomepageComponents/Programs";
import ShortMessage from "../Components/HomepageComponents/ShortMessage";
import NavLinks from "../Components/NavLinks";
import type { ShowcaseData } from "../Components/Showcase";
import Showcase from "../Components/Showcase";

const showcaseProjects: ShowcaseData[] = [
  {
    media: [
      "/img/projects/arts/3d/Dracula Gun FInals (2).gif",
      "/img/projects/arts/3d/LAnscape123123123.jpg",
      "/img/projects/arts/3d/Sniperwithtexture.jpg",
      "/img/projects/arts/3d/killuabag.png",
      "/img/projects/arts/3d/pokeball.png",
    ],
    steps: [
      "3D Modeling",
      "Experienced in creating detailed and realistic 3D assets, textures, and garments using Blender, Substance Painter, and Marvelous Designer for creative and professional projects.",
      "3D modeling experience since 2024.",
    ],
    repository: "",
    status: "",
    languages: [
      "/img/logo/blender.png",
      "/img/logo/sp.png",
      "/img/logo/md.png",
    ],
  },
  {
    media: [
      "/img/projects/arts/adobe/vidshowcase.gif",
      "/img/projects/arts/adobe/introfailure.mp4",
      "/img/projects/arts/adobe/OUTRO.mp4",
      "/img/projects/arts/adobe/tttryyyy.mp4",
    ],
    steps: [
      "Video Editing",
      "Specialized in creating engaging and professional video content, utilizing advanced editing techniques and effects for storytelling and branding.",
      "Editing experience from 2023, covering projects from personal content to professional productions.",
    ],
    repository: "",
    status: "Complete",
    languages: [
      "/img/logo/pr.png",
      "/img/logo/capcut.png",
      "/img/logo/blender.png",
    ],
  },
  {
    media: [
      "/img/projects/arts/adobe/wolv.png",
      "/img/projects/arts/adobe/MOCKUPSHOWCASEMOCKUPSHOWCA.png",
      "/img/projects/arts/adobe/gang.jpg",
      "/img/projects/arts/adobe/first desgin layout.jpg",
      "/img/projects/arts/adobe/MOCKUP TRY.jpg",
    ],
    steps: [
      "Photo Editing",
      "Skilled in enhancing, retouching, and manipulating images using Adobe Photoshop and Adobe Illustrator for creative and professional results.",
      "Photo editing experience since 2023.",
    ],
    repository: "",
    status: "",
    languages: ["/img/logo/ps.png", "/img/logo/ai.png"],
  },
];
const Editing = () => {
  return (
    <div>
      <NavLinks />
      <div className="flex justify-center h-auto">
        <div className="w-7xl h-auto flex flex-col">
          <EditingHero />
          {showcaseProjects.map((project, index) => (
            <>
              <div
                className="p-4 rounded-lg mt-3 w-full bg-base-300"
                id={project.steps[0].toLowerCase().replace(/\s+/g, "-")}>
                <span className="font-bold text-lg">{project.steps[0]}</span>
              </div>
              <Showcase key={index} componentIndex={index} {...project} />
            </>
          ))}
          <ShortMessage />
          <Programs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editing;
