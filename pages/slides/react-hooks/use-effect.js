import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `React.useEffect(() => {
  // run the effect
  return () => {
    // clear the effect
  };
}, [valueToListen]); // set values to keep track of`;

export default () => (
  <Slide
    title="React.useEffect"
    basePath="/slides/react-hooks"
    next="use-ref"
    prev="hooked/effects"
    center
  >
    <H2>React.useEffect</H2>
    <p>
      Pass a function and run it after each render, optionally pass an array of
      values and keep track of those values to run the effect.
      <br />
      <br />
      Lastly return a function to clear the effect before running again and when unmounting.
    </p>
    <Code children={code} plain />
  </Slide>
);
