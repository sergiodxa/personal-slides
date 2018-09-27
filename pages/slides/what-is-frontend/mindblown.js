import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Mind Blown"
    basePath="/slides/what-is-frontend"
    next="questions"
    prev="final-words"
    dark
    center
  >
    <img src="/static/mind-blown.gif" role="presentation" />
  </Slide>
);
