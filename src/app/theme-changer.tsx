import { Component } from "solid-js";
import { useTheme } from "../providers/theme-provider";

export const ThemeChanger: Component = () => {
  const theme = useTheme();

  return (
    <div>
      <div>current theme : {theme.themeName()}</div>
      <button
        class="bg-slate-300 dark:bg-slate-800"
        onClick={theme.changeTheme}
      >
        Change Theme
      </button>
    </div>
  );
};
