import { Circle, GraduationCap } from "lucide-react";
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className="flex justify-center  mt-3 relative bg-base-200 overflow-hidden rounded-lg ">
      <div className={`${styles.backGroundContainer} text-lg w-full`}>
        <div
          className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
      </div>
      <div className="flex-1 flex flex-col gap-4 z-100 m-4 mr-2">
        <div className="p-2 text-center font-bold w-[100%] rounded-lg bg-base-100">
          <span>Education Background</span>
        </div>
        <ul className="steps steps-vertical bg-base-100 px-4 py-2 rounded-lg">
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <GraduationCap size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center">
              <span>Our Lady of Fatima Antipolo</span>
              <div className="flex-grow border-t border-solid mx-2"></div>
              <span>2022–2025</span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <GraduationCap size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center">
              <span>Sumulong Memorial High School Antipolo</span>
              <div className="flex-grow border-t border-solid mx-2"></div>
              <span>2020–2022</span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <GraduationCap size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center">
              <span>San Isidro National High School</span>
              <div className="flex-grow border-t border-solid mx-2"></div>
              <span>2016–2020</span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <GraduationCap size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center">
              <span>San Isidro Elementary School</span>
              <div className="flex-grow border-t border-solid mx-2"></div>
              <span>2013–2016</span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <GraduationCap size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center">
              <span>Juan Sumulong Memorial High Schoo</span>
              <div className="flex-grow border-t border-solid mx-2"></div>
              <span>2010–2013</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col gap-4 z-100 m-4 ml-2">
        <div className="p-2 text-center font-bold w-[100%] rounded-lg bg-base-100">
          <span>Key Skills</span>
        </div>
        <ul className="steps steps-vertical bg-base-100 px-4 py-2 rounded-lg">
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center text-left">
              <span>
                Full-Stack Website Development: Proficient in both front-end and
                back-end
              </span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center text-left">
              <span>Programming Languages: HTML, CSS, PHP, Javascript, C</span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center text-left">
              <span>
                Frameworks: React, Vue, Tailwind, Bootstrap, Vuetify, Express
              </span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center text-left">
              <span>
                Editing: Blender, Premiere Pro, Photoshop, Adobe Illustrator
              </span>
            </div>
          </li>
          <li className="step step-base-300 w-full">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div className="flex w-full items-center text-left">
              <span>Database Management: MySQL, MongoDB</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
