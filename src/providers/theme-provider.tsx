import {
  Accessor,
  JSX,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

const LOCAL_STORAGE_KEY = "theme";
const themeOptions = ["light", "dark", "auto"] as const;

type ThemeOptions = (typeof themeOptions)[number];

type Theme = {
  theme: () => "light" | "dark";
  themeName: Accessor<ThemeOptions>;
  changeTheme: () => void;
};

const ThemeContext = createContext<Theme>();

function getLocalTheme(): ThemeOptions {
  const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (localStorageTheme === "light") return "light";
  if (localStorageTheme === "dark") return "dark";
  return "auto";
}

function getTheme(theme: ThemeOptions): Theme["theme"] {
  return () => {
    if (theme !== "auto") return theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
}

export function ThemeProvider(props: {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | (string & {})
    | null
    | undefined;
}) {
  const [theme, setTheme] = createSignal<ThemeOptions>(getLocalTheme());

  function changeTheme() {
    const currentThemeIndex = themeOptions.findIndex((it) => it === theme());
    let nextIndex = currentThemeIndex + 1;
    if (nextIndex >= themeOptions.length) nextIndex = 0;
    const nextThemeName = themeOptions[nextIndex];
    setTheme(nextThemeName);
    localStorage.setItem(LOCAL_STORAGE_KEY, nextThemeName);
  }

  const context: Theme = {
    // eslint-disable-next-line solid/reactivity
    theme: getTheme(theme()),
    themeName: theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={context}>
      <div class={getTheme(theme())()}>{props.children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("can't find ThemeContext");
  }
  return context;
}
