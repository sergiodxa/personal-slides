import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="What If I Told You All Are?"
    basePath="/slides/what-is-frontend"
    next="front-is-not-web"
    prev="which-are"
    dark
    center
  >
    <H1>What If I Told You All Are?</H1>
    <img src="/static/what-if.jpg" role="presentation" width="400" />
  </Slide>
);
