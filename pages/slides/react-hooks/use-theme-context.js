import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({ theme, children }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}`;

export default () => (
  <Slide
    title="useThemeContext Custom Hook"
    basePath="/slides/react-hooks"
    next="use-local-state"
    prev="custom-hooks"
    center
  >
    <H2><strong>useThemeContext</strong> Custom Hook</H2>
    <Code children={code} plain />
  </Slide>
);
