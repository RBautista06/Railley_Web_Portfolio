import { useEffect, useState } from "react";
import { THEMES } from "../constants/themes";
import { ChevronDown } from "lucide-react";

const ThemeSwatcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); /// get the attribute data-theme and replace the value
    localStorage.setItem("theme", theme); /// setting the new value to the local storage
  }, [theme]);

  return (
    <div className="dropdown dropdown-bottom dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost flex items-center justify-between px-2">
        <div
          className="rounded-sm overflow-hidden border border-base-200 shadow-md"
          data-theme={theme}>
          <div className="grid grid-cols-2 size-5  w-full gap-0.5 p-1">
            <div className="size-1.5 rounded bg-primary" />
            <div className="size-1.5  rounded bg-secondary" />
            <div className="size-1.5  rounded bg-accent" />
            <div className="size-1.5  rounded bg-neutral" />
          </div>
        </div>{" "}
        <ChevronDown size={20} />
      </div>
      <ul
        className="dropdown-content  bg-base-200 rounded-lg mt-2 z-[1] w-auto p-2 shadow-sm flex flex-col gap-2  h-110 overflow-y-auto"
        tabIndex={0}
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}>
        {THEMES.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`btn btn-sm h-auto  py-1 overflow-hidden rounded-lg shadow-md transition-all flex justify-between items-center capitalize ${
              theme === t ? "btn-primary text-base-100" : ""
            }`}>
            {/* Preview theme colors */}
            <div
              className=" rounded overflow-hidden border border-base-200 shadow-md"
              data-theme={t}>
              <div className="grid grid-cols-2  w-full gap-0.5 p-1">
                <div className="size-1.5 rounded-md bg-primary" />
                <div className="size-1.5  rounded bg-secondary" />
                <div className="size-1.5  rounded bg-accent" />
                <div className="size-1.5  rounded bg-neutral" />
              </div>
            </div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwatcher;
