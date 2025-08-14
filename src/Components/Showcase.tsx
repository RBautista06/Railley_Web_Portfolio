import { Check, Circle, GithubIcon } from "lucide-react";
import { useState } from "react";

export type ShowcaseData = {
  media: string[];
  steps: string[];
  repository: string;
  status: string;
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

  return (
    <div className="flex gap-3   bg-base-300 p-4 mt-3 rounded-lg  ">
      {/* Media Section */}
      <div
        className="relative p-2 sm:grid bg-gradient-to-b to-blue-950 overflow-hidden justify-center text-left
          lg:w-[50%] lg:p-0 lg:bg-none flex-1">
        <div className="grid relative mt-2 rounded-sm overflow-hidden w-full aspect-video lg:mt-0">
          <div className="flex w-full h-full bg-base-100">
            {media[selectedIndex].endsWith(".mp4") ? (
              <video
                src={media[selectedIndex]}
                controls
                autoPlay
                loop
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={media[selectedIndex]}
                alt=""
                className="object-fill w-200"
              />
            )}
          </div>
        </div>

        {/* Media Switcher Dots */}
        <div className="flex align-center gap-2 p-3 bg-base-100 justify-center shadow-sm rounded-sm mt-3">
          {media.map((_, index) => (
            <input
              key={index}
              type="radio"
              name={`mediaSwitcher-${componentIndex}`} // now works
              checked={selectedIndex === index}
              onChange={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col gap-"></div>
      <ul className="steps steps-vertical flex-1">
        {steps.map((step, index) => (
          <li className="step step-primary" key={index}>
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <p
              className={`text-left ${
                index === 0 ? "font-bold text-lg" : "text-sm"
              }`}>
              {step}
            </p>
          </li>
        ))}

        {/* Repository Link */}
        <li className="step step-primary">
          <span className="step-icon">
            <Circle size={18} className="fill-gray-100 shadow-xl" />
          </span>
          <span className="text-left text-sm flex gap-2 items-center  ">
            <div className="flex gap-x-2 justify-start flex-wrap">
              {languages.map((src, index) => (
                <img
                  key={`prog-${index}`}
                  src={src}
                  alt={`Programming logo ${index + 1}`}
                  className="size-8 object-contain"
                />
              ))}
            </div>
          </span>
        </li>
        {repository && (
          <li className="step step-primary">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <span className="text-left text-sm flex gap-2 items-center  hover:scale-105 duration-300 transition-all ">
              <div className="rounded-full bg-white p-1">
                <GithubIcon size={18} className="text-base-300" />
              </div>
              <a href={repository} target="_blank" rel="noopener noreferrer">
                {repository}
              </a>
            </span>
          </li>
        )}

        {/* Status Badge */}
        {repository && (
          <li className="step step-primary">
            <span className="step-icon">
              <Circle size={18} className="fill-gray-100 shadow-xl" />
            </span>
            <div
              className={`text-sm text-left flex gap-2 border p-2 rounded-lg  ${
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
