import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <>
        <div>Clicks: {this.state.counter}</div>
        <button
          onClick={() =>
            this.setState(state => ({ counter: state.counter + 1 }))
          }
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
`;

export default () => (
  <Slide
    title="State in the Classy World"
    basePath="/slides/react-hooks"
    next="hooked/state"
    prev="what"
    center
  >
    <H2>State in the Classy World</H2>
    <Code children={code} plain />
  </Slide>
);
