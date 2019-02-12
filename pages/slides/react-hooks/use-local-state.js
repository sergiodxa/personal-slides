import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";

function useLocalState(key, initialValue = "") {
  const [state, setState] = React.useState(initialValue);

  React.useEffect(() => {
    const value = localStorage.getItem(key);
    update(value || initialValue);
  }, [key]);

  React.useEffect(() => {
    function handler({ key: eventKey, newValue }) {
      if (eventKey === key && newValue !== state) update(newValue);
    }
    window.addEventListener("storage", handler);
    return () => window.removeEventListener(handler);
  }, [key]);

  function update(newState) {
    localStorage.setItem(key, newState);
    setState(newState);
  }

  function clear() {
    localStorage.setItem(key, initialValue);
    setState(initialValue);
  }

  return [state, update, clear];
}

export default useLocalState;`;

export default () => (
  <Slide
    title="useLocalState Custom Hook"
    basePath="/slides/react-hooks"
    next="using-use-local-state"
    prev="use-theme-context"
    center
  >
    <H2><strong>useLocalState</strong> Custom Hook</H2>
    <Code children={code} plain />
  </Slide>
);
