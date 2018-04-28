import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Static Website"
    basePath="/slides/local-to-global"
    next="static/files"
    prev="deployment"
    center
    dark
  >
    <H1>
      <strong>Static</strong> Website
    </H1>
  </Slide>
);
