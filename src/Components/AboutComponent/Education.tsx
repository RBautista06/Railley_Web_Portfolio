import { Circle, GraduationCap } from "lucide-react";
import styles from "./education.module.css";
const educationData = [
  { school: "Our Lady of Fatima Antipolo", years: "2022–2025" },
  { school: "Sumulong Memorial High School Antipolo", years: "2020–2022" },
  { school: "San Isidro National High School", years: "2016–2020" },
  { school: "San Isidro Elementary School", years: "2013–2016" },
  { school: "Juan Sumulong Memorial High Schoo", years: "2010–2013" },
];

const skillsData = [
  "Full-Stack Website Development: Proficient in both front-end and back-end",
  "Programming Languages: HTML, CSS, PHP, Javascript, C",
  "Frameworks: React, Vue, Tailwind, Bootstrap, Vuetify, Express",
  "Editing: Blender, Premiere Pro, Photoshop, Adobe Illustrator",
  "Database Management: MySQL, MongoDB",
];
const Education = () => {
  return (
    <div className="flex justify-center  mt-3 relative bg-base-200 overflow-hidden rounded-lg md:flex-row flex-col md:gap-0 gap-3 py-3 md:py-0">
      <div className={`${styles.backGroundContainer} text-lg w-full`}>
        <div
          className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
      </div>
      <div className="flex-1 flex flex-col gap-4 z-100 mx-2 md:ml-4 md:my-4">
        <div className="p-2 text-center font-bold w-full rounded-lg bg-base-100">
          <span>Education Background</span>
        </div>
        <ul className="steps steps-vertical bg-base-100 px-4 py-2 rounded-lg">
          {educationData.map((item, index) => (
            <li
              key={index}
              className="step step-base-300 w-full text-sm md:text-md">
              <span className="step-icon">
                <GraduationCap size={18} className="fill-gray-100 shadow-xl" />
              </span>
              <div className="flex w-full items-center">
                <span className="text-left">{item.school}</span>
                <div className="flex-grow border-t border-solid mx-2"></div>
                <span>{item.years}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Skills */}
      <div className="flex-1 flex flex-col gap-4 z-100 mx-2 md:mr-4 md:my-4">
        <div className="p-2 text-center font-bold w-full rounded-lg bg-base-100">
          <span>Key Skills</span>
        </div>
        <ul className="steps steps-vertical bg-base-100 px-4 py-2 rounded-lg">
          {skillsData.map((skill, index) => (
            <li
              key={index}
              className="step step-base-300 w-full text-sm md:text-md  ">
              <span className="step-icon">
                <Circle size={18} className="fill-gray-100 shadow-xl" />
              </span>
              <div className="flex w-full items-center text-left">
                <span>{skill}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
