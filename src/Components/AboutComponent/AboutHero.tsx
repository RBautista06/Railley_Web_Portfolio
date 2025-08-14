import styles from "./aboutHero.module.css";
const AboutHero = () => {
  return (
    <div className="flex justify-center  mt-3 relative bg-base-200 overflow-hidden rounded-lg ">
      <div className={`${styles.backGroundContainer} text-lg w-full`}>
        <div
          className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
      </div>
      <div className="flex z-100 py-4 ">
        <div className="p-2">
          <div className="size-65 border-4 rounded-full overflow-hidden">
            <img src="/img/railleyphotos/caphold2.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4  w-200">
          <div className="p-2 px-4  rounded-lg bg-base-100">
            <span className="font-bold text-xl text-shadow-xl">
              Railley Nickolei Vince S. Bautista
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 rounded-lg">
            <div className="flex">
              <span className="w-35 font-bold">COURSE:</span>
              <span>Bachelor of Science in Information Technology</span>
            </div>
            <div className="flex">
              <span className="w-35 font-bold">Date of Birth:</span>
              <span>April, 06, 2003</span>
            </div>
            <div className="flex">
              <span className="w-35 font-bold">Address:</span>
              <span>
                {" "}
                Serrato Comp San Jose Ext Bgy San Isidro Antipolo 1870
              </span>
            </div>
            <div className="flex">
              <span className="w-35 font-bold">Phone:</span>
              <span>09284948360</span>
            </div>
            <div className="flex">
              <span className="w-35 font-bold">GitHub:</span>
              <a
                className="hover:scale-105 transition-all duration-300"
                href="https://github.com/RBautista06"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/RBautista06
              </a>
            </div>
          </div>

          <div className="text-sm italic text-center p-2 rounded-lg">
            <p>
              "A BSIT graduate passionate about building interactive web
              applications and creating eye-catching digital content. I combine
              web development skills with photo, video, and 3D editing to
              deliver projects that are both functional and visually engaging."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
