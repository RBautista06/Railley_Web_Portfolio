import { ChevronLeft, ChevronRight, Circle, GithubIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ShowcaseData = {
  media: string[];
  steps: string[];
  repository?: string;
  status?: "Complete" | "In Progress";
  languages: string[];
};

type ShowcaseProps = ShowcaseData & {
  componentIndex: number;
};

const Showcase = ({
  media,
  steps,
  repository,
  status = "Complete",
  componentIndex,
  languages,
}: ShowcaseProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Animation variants for sliding
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setSelectedIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 bg-base-300 p-2 md:p-4 mt-3 rounded-lg">
      {/* Media Section */}
      <div className="relative flex-1 p-2 sm:grid overflow-hidden lg:w-[50%] lg:p-0">
        <div className="relative mt-2 rounded-sm overflow-hidden w-full aspect-video bg-base-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={selectedIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute w-full h-full flex">
              {media[selectedIndex].endsWith(".mp4") ? (
                <video
                  src={media[selectedIndex]}
                  controls
                  autoPlay
                  loop
                  className="object-contain w-full h-full"
                />
              ) : (
                <img
                  src={media[selectedIndex]}
                  alt={`Showcase media ${selectedIndex + 1}`}
                  className="object-contain w-full h-full"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Media Switcher Dots */}
        <div className="flex gap-2 p-2 bg-base-100 justify-center shadow-sm rounded-sm mt-3">
          {media.map((_, index) => (
            <input
              key={index}
              type="radio"
              name={`mediaSwitcher-${componentIndex}`} // unique name per component
              checked={selectedIndex === index}
              onChange={() => {
                setDirection(index > selectedIndex ? 1 : -1);
                setSelectedIndex(index);
              }}
            />
          ))}
        </div>
      </div>

      {/* Steps / Info Section */}
      <ul className="steps steps-vertical md:flex-1">
        {steps.map((step, index) => (
          <li className="step step-primary" key={index}>
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <p
              className={`text-left ${
                index === 0 ? "font-bold md:text-lg" : "text-xs md:text-sm"
              }`}>
              {step}
            </p>
          </li>
        ))}

        {/* Languages */}
        <li className="step step-primary">
          <span className="step-icon">
            <Circle size={18} className="fill-gray-100 shadow-xl" />
          </span>
          <div className="flex gap-2 flex-wrap">
            {languages.map((src, index) => (
              <img
                key={`lang-${index}`}
                src={src}
                alt={`Programming logo ${index + 1}`}
                className="size-6 md:size-8 object-contain"
              />
            ))}
          </div>
        </li>

        {/* Repository Link */}
        {repository && (
          <li className="step step-primary">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-xs md:text-sm flex gap-2 items-center hover:scale-105 transition">
              <div className="rounded-full bg-white p-1">
                <GithubIcon size={18} className="text-base-300" />
              </div>
              {repository}
            </a>
          </li>
        )}

        {/* Status Badge */}
        {status && (
          <li className="step step-primary">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div
              className={`text-xs md:text-sm text-left flex gap-2 p-2 rounded-lg border ${
                status === "Complete"
                  ? "bg-green-400/20 border-green-400"
                  : "bg-yellow-300/40 border-yellow-400"
              }`}>
              <div className="inline-grid *:[grid-area:1/1] items-center">
                <div
                  className={`status ${
                    status === "Complete" ? "status-success" : "status-warning"
                  } animate-ping`}></div>
                <div
                  className={`status ${
                    status === "Complete" ? "status-success" : "status-warning"
                  }`}></div>
              </div>
              {status}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Showcase;
