import Slide from "components/slide";
import { H1 } from "components/title";
import Quote from "components/quote";

export default () => (
  <Slide
    title="Open Source Software"
    basePath="/slides/local-to-global"
    next="oss/micro"
    prev="zeit.domains"
    center
    dark
  >
    <H1>Open Source Software</H1>
    <Quote>
      Because Open Source plays a major part in how we build our products, we
      see it as a matter of course to give the same effort back to our community
      by creating valuable, free and easy-to-use software.
    </Quote>
  </Slide>
);
