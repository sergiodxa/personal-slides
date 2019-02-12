import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code1 = `const [state, setState] = React.useState(initialState); // create the state`;
const code2 = `setState(newValue); // update state
setState(currentValue => newValue); // update using prev value`;

export default () => (
  <Slide
    title="React.useState"
    basePath="/slides/react-hooks"
    next="classy/effects"
    prev="hooked/state"
    center
  >
    <H2>React.useState</H2>
    <p>Define your initial state, get the value and a function to update it</p>
    <Code children={code1} plain />
    <p>
      The updater could receive the new value or a function to update (as
      setState)
    </p>
    <Code children={code2} plain />
  </Slide>
);
