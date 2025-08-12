import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full flex justify-center border-t-2 mt-2 bg-base-200">
      <div className="w-7xl flex flex-col gap-2">
        <div className="border-b text-center py-2 ">
          <span className="font-bold text-lg">Contact Us</span>
        </div>
        <div className="flex justify-between items-center px-5 py-2">
          <div className="">
            <img
              src="/img/graphics/ZENITHLOGOWITHNAME_WHITE.png"
              alt=""
              className="w-100"
            />
          </div>
          <div className="flex">
            <div className="flex gap-10 justify-between items-start">
              <div className="flex flex-col text-center ">
                <span className="font-semibold ">Home</span>
                <Link to={"/programming"}>Technical Skills</Link>
                <Link to={"/programming"}>Soft Skills</Link>
              </div>
              <div className="flex flex-col text-center">
                <span className="font-semibold ">Programming</span>
                <Link to={"/programming"}>School Projects</Link>
                <Link to={"/programming"}>Personal Projects</Link>
                <Link to={"/programming"}>TechStack</Link>
              </div>
              <div className="flex flex-col text-center">
                <span className="font-semibold ">Editing</span>
                <Link to={"/editing"}>Photo Editing</Link>
                <Link to={"/editing"}>Video Editing</Link>
                <Link to={"/editing"}>3D Modeling</Link>
              </div>
              <div className="flex flex-col text-center">
                <span className="font-semibold ">About</span>
                <Link to={"/about"}>Background</Link>
                <Link to={"/about"}>Personal Information</Link>
                <Link to={"/about"}>Achievements</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-t py-2 flex gap-5 justify-center items-center font-semibold">
          <Link to={"/"}>Home</Link>
          <Link to={"/programming"}>Programming</Link>
          <Link to={"/editing"}>Editing</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="pb-2 text-center text-sm">
          <span className="opacity-80">
            &copy; Copyright 2025 All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
