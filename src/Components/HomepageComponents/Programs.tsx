const allLogos = [
  "/img/logo/html-5.png",
  "/img/logo/css.png",
  "/img/logo/js.png",
  "/img/logo/php.png",
  "/img/logo/express.png",
  "/img/logo/nodejs.png",
  "/img/logo/react.png",
  "/img/logo/mongodb.png",
  "/img/logo/msql.png",
  "/img/logo/redux.png",
  "/img/logo/zustand.png",
  "/img/logo/pinia.png",
  "/img/logo/bootstrap.png",
  "/img/logo/tailwind.png",
  "/img/logo/vue.png",
  "/img/logo/vuetify.png",
  "/img/logo/sp.png",
  "/img/logo/ps.png",
  "/img/logo/pr.png",
  "/img/logo/ai.png",
  "/img/logo/blender.png",
  "/img/logo/capcut.png",
  "/img/logo/md.png",
];

export default function Programs() {
  return (
    <div className="pb-4 flex flex-col justify-center items-center mt-3 mx-2 md:mx-0">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <div className="flex gap-2 justify-center flex-wrap md:w-[60%] sm:w-[100%]">
          {allLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="size-7 md:size-10 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
