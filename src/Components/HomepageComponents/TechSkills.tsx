import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function TechSkills() {
  const media = [
    "/img/projects/programming/providence/providence.gif",
    "/img/projects/arts/3d/Dracula Gun FInals (2).gif",
    "/img/projects/arts/adobe/MOCKUPSHOWCASEMOCKUPSHOWCA.png",
    "/img/projects/arts/adobe/vidshowcase.gif",
  ];

  const titles = [
    "Web Development",
    "3D Modelling",
    "Photo Editing",
    "Video Editing",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            <div className="grid relative mt-2 rounded-sm overflow-hidden w-full aspect-video lg:mt-0">
              <div className="flex w-full h-full">
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
              </div>
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
                    src="/img/projects/programming/providence/providenceLandingPage.jpg"
                    alt=""
                    className="object-fill w-70 aspect-video "
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    Web Development
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    Web Developing Using HTML, CSS, PHP, JAVASCRIPT,
                    TAILWINDCSS, BOOTSTRAP, REACT, EXPRESS
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
                    src="/img/projects/arts/3d/LAnscape123123123.jpg"
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
              to="/editing#photo-editing"
              className="bg-base-300 bg-gradient-to-r to-base-200 p-2 rounded-md">
              <div className="flex">
                <div className="overflow-hidden w-[40%] lg:w-[30%]">
                  <img
                    src="/img/projects/arts/adobe/killuabag.png"
                    alt=""
                    className="object-cover aspect-video w-70 "
                  />
                </div>
                <div className="px-2 py-1 grid w-[75%]">
                  <h1 className="text-lg text-left font-bold  md:text-xl">
                    Photo Editing
                  </h1>
                  <p className="text-left text-xs md:text-sm">
                    Photo Editing using Photoshop, and Adobe Illustrator
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
                    src="/img/projects/arts/adobe/vidshowcase.gif"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
