import { useState } from "react";
import { X } from "lucide-react";
import styles from "./certificate.module.css";

type Achievement = {
  src: string;
  title: string;
};

const achievements: Achievement[] = [
  {
    src: "./img/certificate/networking_Certiport.png",
    title: "Networking Certiport - 2025",
  },
  {
    src: "./img/certificate/python.png",
    title: "Python Certiport - 2025",
  },
  {
    src: "./img/certificate/laravel.png",
    title: "OLFU: Modern Web Development with Laravel - 2025",
  },
  {
    src: "./img/certificate/itdays.png",
    title:
      "OLFU Academic Competition: Web Development Category Champion - 2025",
  },
  {
    src: "./img/certificate/INTERCAMPUS.png",
    title:
      "OLFU Intercampus Academic Competition: Web Design Category Champion - 2025",
  },
  {
    src: "./img/certificate/capstone.png",
    title: "Capstone: Certificate of Recognition - 2024",
  },
  {
    src: "./img/certificate/networking2.jpg",
    title: "Cisco: Switching, Routing and Wireless Essentials - 2024",
  },
  {
    src: "./img/certificate/UMAK.png",
    title: "13th IT Olympics (UMAK): Certificate of Participation - 2024",
  },
  {
    src: "./img/certificate/networking.jpg",
    title: "Cisco: Introduction to Networks  - 2023",
  },
  {
    src: "./img/certificate/cybersecurity.jpg",
    title: "Cisco: Introduction to Cybersecurity - 2023",
  },
];
const badges = [
  "./img/certificate/badges/CCNAITN__1_ (1).png",
  "./img/certificate/badges/CCNASRWE__1_.png",
  "./img/certificate/badges/I2CS__1_.png",
  "./img/certificate/badges/ITS-Badges_Networking_1200px.png",
  "./img/certificate/badges/ITS-Badges_Python_1200px.png",
];
const Certificate = () => {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <>
      {/* Main Achievements Section */}
      <div className="flex mt-3 relative bg-base-200 overflow-hidden rounded-lg">
        <div className={`${styles.backGroundContainer} text-lg w-full`}>
          <div
            className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4 z-10 w-full">
          <div className="items-center rounded-lg flex gap-2 md:gap-4 justify-between py-2 px-2 md:px-4 bg-gradient-to-r from-base-100 to-base-200">
            <span className="text-center font-bold">Certificate</span>
            <div className="flex gap-2 ">
              {badges.map((badge, index) => (
                <img key={index} src={badge} className="size-6" />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center ">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="gap-2 md:gap-4 flex flex-col justify-between p-2 md:p-4 bg-base-100 rounded-lg w-57 md:w-75 cursor-pointer hover:shadow-lg transition hover:scale-105 duration-300 h-[15rem] md:h-[20rem]"
                onClick={() => setSelected(achievement)}>
                <div className="h-60 md:h-80 overflow-hidden rounded-lg">
                  <img
                    src={achievement.src}
                    className="w-full h-full object-cover"
                    alt={achievement.title}
                  />
                </div>
                <div className="flex items-center justify-center text-center bg-base-300 p-2 rounded-lg h-16 md:h-20 overflow-hidden">
                  <span className="font-semibold text-shadow-xl md:text-sm text-xs line-clamp-2">
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

export default Certificate;
