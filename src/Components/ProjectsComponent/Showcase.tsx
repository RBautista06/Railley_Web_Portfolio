import { Check } from "lucide-react";
import { useState } from "react";

export interface ShowcaseData {
  media: string[];
  steps: string[];
  status?: "Complete" | "Ongoing";
}

const Showcase = ({ media, steps, status = "Complete" }: ShowcaseData) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="flex gap-10 mt-3 bg-base-300 p-4 rounded-lg">
      <div
        className="relative p-2  sm:grid bg-gradient-to-b to-blue-950 overflow-hidden justify-center text-left
          lg:w-[50%] lg:p-0 lg:bg-none flex-1">
        <div className="grid relative mt-2 rounded-sm overflow-hidden w-full aspect-video lg:mt-0">
          <div className="flex w-full h-full">
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

        <div className="flex align-center gap-2 p-3 bg-base-100 justify-center shadow-sm rounded-sm mt-3">
          {media.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="mediaSwitcher"
              checked={selectedIndex === index}
              onChange={() => setSelectedIndex(index)}
              className=""
            />
          ))}
        </div>
      </div>

      <ul className="steps steps-vertical flex-1">
        {steps.map((step, index) => (
          <li className="step step-primary" key={index}>
            <span className="step-icon">
              <Check size={18} />
            </span>
            <p className="text-left text-sm">{step}</p>
          </li>
        ))}

        <li className="step step-primary">
          <span className="step-icon">
            <Check size={18} />
          </span>
          <div
            className={`text-sm text-left flex gap-2 border p-2 rounded-lg  ${
              status === "Complete"
                ? "bg-green-400/20 border-green-400"
                : "bg-yellow-300/40 border-yellow-400"
            }`}>
            <div className="inline-grid *:[grid-area:1/1] items-center">
              <div
                className={`status  ${
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
      </ul>
    </div>
  );
};

export default Showcase;
