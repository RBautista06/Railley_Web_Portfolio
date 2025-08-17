import { useState } from "react";
import { CircleStar, X } from "lucide-react";
import styles from "./achivements.module.css";

type Achievement = {
  src: string;
  title: string;
};

const achievements: Achievement[] = [
  {
    src: "./img/railleyphotos/dl.jpg",
    title: "Dean's Lister for School Year 2024–2025, 2nd Semester",
  },
  {
    src: "./img/railleyphotos/intercampus.jpg",
    title: "CCS 2025 OLFU INTERCAMPUS: Web Development Champion",
  },
  {
    src: "./img/railleyphotos/olfuccs.jpg",
    title: "2025 OLFU Intercampus: Web Development Champion",
  },
  {
    src: "./img/railleyphotos/umak2.jpg",
    title: "2024 OLFU Representative – 13th IT Skills Olympics Web Design ",
  },
];

const Achievements = () => {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <>
      {/* Main Achievements Section */}
      <div className="flex mt-3 relative bg-base-200 overflow-hidden rounded-lg" id="achievements">
        <div className={`${styles.backGroundContainer} text-lg w-full`}>
          <div
            className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4 z-10 w-full">
          <div className=" rounded-lg flex gap-2 md:gap-4 justify-between py-2 px-2 md:px-4 bg-gradient-to-r from-base-100 to-base-200">
            <span className="text-center font-bold">Achievements</span>
            <div className="flex gap-2">
              <CircleStar className="text-yellow-400" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="gap-2 md:gap-4 flex flex-col p-2 md:p-4 bg-base-100 rounded-lg h-contain w-49 md:w-75 lg:w-75 cursor-pointer hover:shadow-lg transition hover:scale-105 duration-300 h-[20rem] md:h-auto"
                onClick={() => setSelected(achievement)}>
                <div className="h-60 md:h-80 overflow-hidden rounded-lg">
                  <img
                    src={achievement.src}
                    className="w-full h-full object-cover"
                    alt={achievement.title}
                  />
                </div>
                <div className="text-center bg-base-300 p-2 rounded-lg flex-grow">
                  <span className="font-semibold text-shadow-xl md:text-sm text-xs">
                    {achievement.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-200 flex items-center justify-center ">
          <div className="bg-base-100 rounded-xl p-4 md:p-8 shadow-2xl w-200 h-auto relative mx-4">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <X />
            </button>
            <div className="overflow-hidden rounded-lg mb-4 mt-6 md:mt-1">
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center bg-base-300 p-2 rounded-lg">
              <span className="font-semibold text-shadow-xl text-sm">
                {selected.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;
