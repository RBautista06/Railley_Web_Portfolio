import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import styles from "./heroContainer.module.css";
const HeroContainer = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between mt-3 relative bg-gradient-to-b from-primary/30 overflow-hidden rounded-lg">
      <div className={`${styles.backGroundContainer} text-lg w-full `}>
        <div
          className={`${styles.backGroundImage} text-lg w-full bg-base-300`}></div>
      </div>
      <div
        className="absolute z-2 -mt-55 right-0  lg:right-20 rounded-full bg-gradient-to-b from-primary/40 to-primary h-120 w-120 lg:h-160 lg:w-160 shadow-2xl shadow-base-300
  md:right-10 md:-mt-90 animate-[slideInRight_1.5s_ease-out_forwards]"></div>

      <div
        className="absolute z-2 mt-100 self-center rounded-t-full bg-gradient-to-b from-primary to-primary/10  shadow-2xl shadow-base-300
h-120 w-120 lg:h-160 lg:w-160 md:mt-200 md:left-40 animate-[slideInLeft_1.5s_ease-out_forwards]"></div>

      <div className="flex flex-col  gap-3 md:gap-10 justify-center items-start px-4 pt-5 md:px-10 md:pt-0 z-100">
        <h1 className=" font-bold text-lg  md:text-2xl lg:text-left w-full">
          Hello there I'm
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-4xl font-bold  text-shadow lg:text-left w-full">
            Railley Nickolei Vince Bautista
          </h1>
          <p className="md:text-xl ">
            A Passionate Web Developer, 3D Model Artist, Video Editor, and Photo
            Editor. Bringing creativity and technical expertise to every
            project.
          </p>
        </div>

        <Link
          to="/about"
          className="flex p-3 h-auto border-white border-2 shadow-md gap-2 rounded-md lg:p-4 justify-center items-center lg:px-5 btn-primary btn text-white text-sm md:text-md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Learn More
          <EnvelopeIcon className="h-5 self-center" />
        </Link>
      </div>
      <div className="flex flex-end justify-center pt-2 md:pt-10  z-100">
        <img
          src="./img/railleyphotos/gradpic.png"
          className="w-60 md:w-120 drop-shadow-2xl "
        />
      </div>
    </section>
  );
};

export default HeroContainer;
