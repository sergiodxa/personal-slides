import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `const ref = React.useRef(initialValue); // create the ref
ref.current = newValue; // update the value
console.log(ref.current); // use the value`;

export default () => (
  <Slide
    title="React.useRef"
    basePath="/slides/react-hooks"
    next="classy/context"
    prev="use-effect"
    center
  >
    <H2>React.useRef</H2>
    <p>
      Save a value to reuse across renders, similar to an instance property.
    </p>
    <Code children={code} plain />
  </Slide>
);
