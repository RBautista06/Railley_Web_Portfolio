import { Link, useLocation } from "react-router";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  // Scroll after navigation if there's a hash in the URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        const topOffset =
          target.getBoundingClientRect().top + window.scrollY - 50; // 50px offset
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="w-full flex justify-center border-t-2 mt-2 bg-base-200">
      <div className="w-7xl flex flex-col gap-2">
        <div className="border-b text-center py-2">
          <span className="font-bold md:text-lg ">Explore More</span>
        </div>

        <div className="flex justify-between items-center px-5 py-2 flex-col md:flex-row gap-3 md:gap-0">
          <div>
            <img
              src="/img/graphics/ZENITHLOGOWITHNAME_WHITE.png"
              alt=""
              className="w-110 md:w-100"
            />
          </div>

          <div className="flex">
            <div className="flex gap-6 md:gap-10 justify-between items-start text-sm md:text-md">
              {/* Home Section */}
              <div className="flex flex-col text-center">
                <span className="font-semibold">Home</span>
                <Link
                  to="/#technicalSkills"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Technical Skills
                </Link>
                <Link
                  to="/#softSkills"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Soft Skills
                </Link>
              </div>

              {/* Programming Section */}
              <div className="flex flex-col text-center">
                <span className="font-semibold">Programming</span>
                <Link
                  to="/programming#school-projects"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  School Projects
                </Link>
                <Link
                  to="/programming#personal-projects"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Personal Project
                </Link>
              </div>

              {/* Editing Section */}
              <div className="flex flex-col text-center">
                <span className="font-semibold">Editing</span>
                <Link
                  to="/editing#photo-editing"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Photo
                </Link>
                <Link
                  to="/editing#video-editing"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Video
                </Link>
                <Link
                  to="/editing#3d-modeling"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  3D
                </Link>
              </div>

              {/* About Section */}
              <div className="flex flex-col text-center">
                <span className="font-semibold">About</span>
                <Link
                  to="/about#personalbackground"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Personal Information
                </Link>
                <Link
                  to="/about#education"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Education
                </Link>
                <Link
                  to="/about#achievements"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  Achievements
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-b border-t py-2 flex gap-5 justify-center items-center font-semibold text-sm md:text-md">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </Link>
          <Link
            to="/programming"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Programming
          </Link>
          <Link
            to="/editing"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Editing
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            About
          </Link>
        </div>

        {/* Copyright */}
        <div className="pb-2 text-center text-xs md:text-sm">
          <span className="opacity-80">
            &copy; Copyright 2025 All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
