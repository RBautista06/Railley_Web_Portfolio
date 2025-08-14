import { Link } from "react-router";

export default function ShortMessage() {
  return (
    <div className="relative4 mt-3 flex bg-gradient-to-t lg:bg-gradient-to-b overflow-hidden justify-center text-left w-full">
      <div className="grid align-center justify-center rounded-2xl bg-base-300 bg-gradient-to-r to-base-200 px-8 py-5 w-full">
        <div className="w-full text-center flex flex-col justify-center items-center">
          <h2 className="text-sm font-bold">
            Crafting Digital Experiences That Inspire
          </h2>
          <br />
          <h1 className="text-xl font-bold text-primary">
            Let’s Build Something Exceptional Together
          </h1>
          <br />
          <p className="text-sm w-[80%]">
            I design and develop modern, responsive websites with a focus on
            clean design, smooth functionality, and engaging user experiences.
            Whether it’s a brand site, web app, or creative project — I turn
            ideas into interactive reality.
          </p>
          <div className="flex gap-2 mt-3 justify-center">
            <Link
              to="/programming"
              className="px-4 py-2 bg-primary rounded-sm text-sm border-1"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              View Projects
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 bg-gray-100 rounded-sm text-sm text-primary border-1 border-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              About Railley
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
