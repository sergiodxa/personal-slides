import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="About me"
    basePath="/slides/micro-frontends"
    next="que-son"
    prev="/"
    center
  >
    <H1>
      I'm <strong>Sergio Xalambrí</strong>,{" "}
      <em>
        Software
        <br /> Developer
      </em>{" "}
      currently working at <strong>▲ZEIT</strong>
    </H1>
  </Slide>
);
