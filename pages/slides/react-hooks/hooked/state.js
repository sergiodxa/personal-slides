import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <div>Clicks: {counter}</div>
      <button onClick={() => setCounter(state => state + 1)}>Increment</button>
    </>
  );
}

export default Counter;
`

export default () => (
  <Slide
    title="State in the Hooked World"
    basePath="/slides/react-hooks"
    next="use-state"
    prev="classy/state"
    center
  >
    <H2>State in the Hooked World</H2>
    <Code children={code} plain />
  </Slide>
);
