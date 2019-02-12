import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const contextCode = `import React from "react";

const ThemeContext = React.createContext();`

const consumerCode = `import React from "react";

function App() {
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    // use theme for something
  }, [theme]);

  return <div className={theme}>Using theme {theme}</div>;
}

export default App;
`;

export default () => (
  <Slide
    title="Context in the Hooked World"
    basePath="/slides/react-hooks"
    next="use-context"
    prev="classy/context"
    center
  >
    <H2>Context in the Hooked World</H2>
    <Code children={contextCode} plain />
    <Code children={consumerCode} plain />
  </Slide>
);
