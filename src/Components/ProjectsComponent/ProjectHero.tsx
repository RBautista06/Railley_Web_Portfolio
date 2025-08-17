import styles from "./projectHero.module.css";

const programmingLogo = [
  { src: "./img/logo/html-5.png", top: "10%", left: "15%" },
  { src: "./img/logo/css.png", top: "20%", left: "70%" },
  { src: "./img/logo/js.png", top: "40%", left: "7%" },
  { src: "./img/logo/php.png", top: "65%", left: "60%" },
  { src: "./img/logo/express.png", top: "75%", left: "30%" },
  { src: "./img/logo/nodejs.png", top: "40%", left: "80%" },
  { src: "./img/logo/ts.png", top: "50%", left: "20%" },
  { src: "./img/logo/react.png", top: "15%", left: "45%" },
  { src: "./img/logo/mongodb.png", top: "35%", left: "25%" },
  { src: "./img/logo/msql.png", top: "55%", left: "90%" },
  { src: "./img/logo/redux.png", top: "65%", left: "75%" },
  { src: "./img/logo/zustand.png", top: "5%", left: "85%" },
  { src: "./img/logo/bootstrap.png", top: "80%", left: "10%" },
  { src: "./img/logo/tailwind.png", top: "80%", left: "50%" },
  { src: "./img/logo/pinia.png", top: "80%", left: "68%" },
  { src: "./img/logo/vue.png", top: "20%", left: "55%" },
  { src: "./img/logo/vuetify.png", top: "80%", left: "40%" },
  { src: "./img/logo/python.png", top: "80%", left: "85%" },
  { src: "./img/logo/java.png", top: "40%", left: "15%" },
  { src: "./img/logo/flutter.png", top: "20%", left: "33%" },
];

const ProjectHero = () => {
  return (
    <section className="flex justify-between mt-3 relative bg-gradient-to-b from-primary/10 overflow-hidden rounded-lg">
      {/* Background image */}
      <div className={`${styles.backGroundContainer} text-lg w-full`}>
        <div
          className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
      </div>
      {programmingLogo.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt=""
          className="absolute size-8 md:size-12 object-contain animate-float pointer-events-none"
          style={{
            top: logo.top,
            left: logo.left,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}

      <div className="flex flex-col gap-10 justify-center items-center px-10 h-80 z-10 w-full ">
        <div className="flex justify-center items-center border-t px-5 py-2 border-b">
          <span className="text-3xl md:text-4xl text-center font-bold text-shadow-lg">
            Programming Projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
