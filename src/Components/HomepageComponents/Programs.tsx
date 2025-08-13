const programmingLogo = [
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
  "/img/logo/bootstrap.png",
  "/img/logo/tailwind.png",
];
const editingLogo = [
  "/img/logo/sp.png",
  "/img/logo/ps.png",
  "/img/logo/pr.png",
  "/img/logo/ai.png",
  "/img/logo/blender.png",
];

export default function Programs() {
  return (
    <div className="pb-4 flex flex-col justify-center items-center mt-3">
      <div className="max-w-7xl min-w-4xl flex flex-col items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-x-2 justify-center flex-wrap">
            {programmingLogo.map((src, index) => (
              <img
                key={`prog-${index}`}
                src={src}
                alt={`Programming logo ${index + 1}`}
                className="size-10 object-contain"
              />
            ))}
          </div>

          <div className="flex gap-x-2 justify-center flex-wrap">
            {editingLogo.map((src, index) => (
              <img
                key={`edit-${index}`}
                src={src}
                alt={`Editing logo ${index + 1}`}
                className="size-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
