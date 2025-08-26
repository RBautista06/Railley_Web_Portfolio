import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function TechSkills() {
  const media = [
    "./img/projects/programming/providence/providence.gif",
    "./img/projects/programming/pokedex/landing.png",
    "./img/projects/arts/3d/Dracula Gun FInals (2).gif",
    "./img/projects/arts/adobe/vidshowcase.gif",
  ];

  const titles = [
    "Web Dev School Projects",
    "Web Dev Pesonal Projects",
    "Photo Editing",
    "Video Editing",
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextSlide = () => {
    setDirection(1);
    setSelectedIndex((prev) => (prev + 1) % media.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  };
  // Manage transition class
  const [transitioning, setTransitioning] = useState(false);

  // Trigger transition when selectedIndex changes
  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 500); // Match the duration of the transition
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  return (
    <div
      className="grid  lg:bg-gradient-to-b   justify-center items-center pt-3"
      id="technicalSkills">
      <div className=" max-w-7xl">
        <div className="p-2 bg-base-300  bg-gradient-to-r to-base-200  rounded-sm mt-2 lg:mt-0 max-w-7xl mb-2 shadow-xl mx-2 md:mx-0">
          <h1 className="text-xl font-bold text-shadow text-left ">
            Technical Skills
          </h1>
        </div>

        <div className="grid w-full lg:flex lg:gap-2  max-w-7xl">
          <div
            className="relative p-2  sm:grid  overflow-hidden justify-center text-left
          lg:w-[50%] lg:p-0 lg:bg-none">
            <div className="grid relative mt-2 rounded-sm overflow-hidden w-full aspect-video lg:mt-0 ">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex w-full h-full">
                  {media[selectedIndex].endsWith(".mp4") ? (
                    <video
                      src={media[selectedIndex]}
                      controls
                      autoPlay
                      loop
                      className="object-contain w-full"
                    />
                  ) : (
                    <img
                      src={media[selectedIndex]}
                      alt=""
                      className="object-fill w-200"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                <ChevronLeft size={15} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                <ChevronRight size={15} />
              </button>
            </div>

            {/* Title with animation */}
            <div
              className="sm:w-full bg-base-300 p-2 my-2 rounded-sm shadow-lg grid justify-center align-center items-center
          lg:p-2">
              <h1
                className={`text-gray-100 font-bold text-lg text-center  transition-opacity duration-300 ease-in-out ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}>
                {titles[selectedIndex]}
              </h1>
            </div>

            <div className="flex align-center gap-2 p-3 bg-base-300 justify-center shadow-sm rounded-sm">
              {media.map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="mediaSwitcher"
                  checked={selectedIndex === index}
                  onChange={() => setSelectedIndex(index)}
                  className=""
                />
              ))}
            </div>
          </div>

          <div className="w-full p-2 grid gap-1  lg:w-[50%] lg:p-0 lg:bg-none">
            <Link
              // to="/programming"
              to="/programming#school-projects"
              className="bg-base-300 bg-gradient-to-r to-base-200 p-2 rounded-md">
              <div className="flex ">
                <div className="overflow-hidden w-[40%] lg:w-[30%]">
                  <img
                    src="./img/projects/programming/providence/providenceLandingPage.jpg"
                    alt=""
                    className="object-fill w-70 aspect-video "
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    Web Dev School Projects
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    Web Developing Using Only Vanilla HTML, CSS, PHP,
                    JAVASCRIPT, MYSQL, VUE, VUETIFY
                  </p>
                </div>
              </div>
            </Link>
            <Link
              // to="/programming"
              to="/programming#personal-projects"
              className="bg-base-300 bg-gradient-to-r to-base-200 p-2 rounded-md">
              <div className="flex ">
                <div className="overflow-hidden w-[40%] lg:w-[30%]">
                  <img
                    src="./img/projects/programming/realtimechat/chat_landingPage.png"
                    alt=""
                    className="object-cover w-70 aspect-video  "
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    Web Dev Personal Projects
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    Web Developing Using REACT, EXPRESS, NODEJS, MONGODB
                    TYPESCRIPT, HTML, CSS, JAVASCRIPT, TAILWINDCSS, VUE
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/editing#3d-modeling"
              className="bg-base-300 bg-gradient-to-r to-base-200 p-2 rounded-md">
              <div className="flex">
                <div className="overflow-hidden w-[40%] lg:w-[30%]">
                  <img
                    src="./img/projects/arts/3d/LAnscape123123123.jpg"
                    alt=""
                    className="object-fill w-70 aspect-video"
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    3D Modeling
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    3D Modeling using Blender and Texturing using Substance
                    Painter
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/editing#video-editing"
              className="bg-base-300 bg-gradient-to-r to-base-200 p-2 rounded-md">
              <div className="flex">
                <div className="overflow-hidden w-[40%] lg:w-[30%]">
                  <img
                    src="./img/projects/arts/adobe/vidshowcase.gif"
                    alt=""
                    className="object-cover aspect-video w-70 "
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    Photo/Video Editing
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    Photo Editing using Photoshop, and Adobe Illustrator
                  </p>
                </div>
              </div>
            </Link>
            {/* <Link
              to="/editing#video-editing"
              className="bg-base-300 bg-gradient-to-r to-base-200 p-2 rounded-md">
              <div className="flex">
                <div className="overflow-hidden w-[40%] lg:w-[30%]">
                  <img
                    src="./img/projects/arts/adobe/vidshowcase.gif"
                    alt=""
                    className="object-fill aspect-video w-70 "
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    Video Editing
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    Video Editing using Premiere Pro, Capcut, and similar
                    softwares.
                  </p>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
