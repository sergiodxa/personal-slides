import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const contextCode = `import React from "react";

const ThemeContext = React.createContext();`

const consumerCode = `import React from "react";
import ThemeContext from "@company/theme-context";

class App extends React.Component {
  static contextType = ThemeContext;
  componentDidMount() {
    // use this.context.theme for something
  }
  componentDidUpdate() {
    // use this.context.theme for something
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <div className={theme}>Using theme {this.context.theme}</div>}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
`;

export default () => (
  <Slide
    title="Context in the Classy World"
    basePath="/slides/react-hooks"
    next="hooked/context"
    prev="use-ref"
    center
  >
    <H2>Context in the Classy World</H2>
    <Code children={contextCode} plain />
    <Code children={consumerCode} plain />
  </Slide>
);
