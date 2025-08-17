import styles from "./editingHero.module.css";

const ediditingLogos = [
  { src: "./img/logo/sp.png", top: "20%", left: "20%" },
  { src: "./img/logo/ps.png", top: "17%", left: "70%" },
  { src: "./img/logo/pr.png", top: "17%", left: "50%" },
  { src: "./img/logo/ai.png", top: "75%", left: "60%" },
  { src: "./img/logo/blender.png", top: "75%", left: "30%" },
  { src: "./img/logo/capcut.png", top: "65%", left: "80%" },
  { src: "./img/logo/md.png", top: "60%", left: "10%" },
];

const EditingHero = () => {
  return (
    <section className="flex justify-between mt-3 relative bg-gradient-to-b from-primary/10 overflow-hidden rounded-lg">
      {/* Background image */}
      <div className={`${styles.backGroundContainer} text-lg w-full`}>
        <div
          className={`${styles.backGroundImage} text-lg w-full bg-base-100`}></div>
      </div>
      {ediditingLogos.map((logo, index) => (
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
          <span className="text-4xl font-bold">Creative Projects</span>
        </div>
      </div>
    </section>
  );
};

export default EditingHero;
