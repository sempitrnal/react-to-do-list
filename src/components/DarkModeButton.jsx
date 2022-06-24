import useDarkMode from "../hooks/useDarkMode";
import { HiSun, HiMoon } from "react-icons/hi";

function DarkModeButton() {
  const [setTheme, colorTheme] = useDarkMode();

  return (
    <div>
      <div
        onClick={() => {
          setTheme(colorTheme);
          localStorage.setItem("theme", colorTheme);
        }}
        className="p-2 text-slate-600 rounded-[50%] cursor-pointer top-9 right-5 z-20 fixed md:bottom-4 md:left-4 md:top-[initial]"
      >
        <HiMoon className="text-xl lg:text-3xl dark:scale-0 transition-all translate-y-5 lg:translate-y-7 scale-100 duration-500" />
        <HiSun className="text-xl lg:text-3xl scale-0 transition-all dark:scale-100 duration-500 dark:text-yellow-300" />
      </div>
    </div>
  );
}

export default DarkModeButton;
