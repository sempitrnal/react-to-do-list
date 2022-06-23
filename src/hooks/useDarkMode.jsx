import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [theme, colorTheme]);
  return [setTheme, colorTheme];
}

export default useDarkMode;
