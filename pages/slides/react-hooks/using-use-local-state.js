import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";
import useLocalState from "@company/useLocalState";

function App() {
  const [state, setState, clearState] = useLocalState("token", "");
  return (
    ...
  );
}

export default App;`;

export default () => (
  <Slide
    title="Using useLocalState"
    basePath="/slides/react-hooks"
    next="other-builtin-hooks"
    prev="use-local-state"
    center
  >
    <H2>
      <strong>Using</strong> useLocalState
    </H2>
    <Code children={code} plain />
  </Slide>
);
