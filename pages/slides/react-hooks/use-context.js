import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

export default () => (
  <Slide
    title="React.useContext"
    basePath="/slides/react-hooks"
    next="custom-hooks"
    prev="hooked/context"
    center
  >
    <H2>React.useContext</H2>
    <p>
      Receive a context object created with `React.createContext` and return the
      current value.
    </p>
    <Code
      children="const contextValue = React.useContext(contextObject);"
      plain
    />
  </Slide>
);
