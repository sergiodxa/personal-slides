import Slide from "components/slide";
import { H1 } from "components/title";
import Quote from "components/quote";

export default () => (
  <Slide
    title="Next.js Multi Zones"
    basePath="/slides/micro-frontends"
    next="next/example"
    prev="next/intro"
    center
    dark
  >
    <H1>Next.js Multi Zones</H1>
    <Quote>
      A zone is a single deployment of a Next.js app. Just like that, you can
      have multiple zones. Then you can merge them as a single app.<br /><br />
      This is exactly the same concept as microservices, but for frontend apps.
    </Quote>
  </Slide>
);
