import Slide from "components/slide";
import { H2, H3 } from "components/title";
import Link from "components/link";

import micro from "url-loader!../../../../static/micro.png";

export default () => (
  <Slide
    title="Micro - Async ES6 HTTP microservices"
    basePath="/slides/local-to-global"
    next="oss/next"
    prev="oss"
    center
    dark
  >
    <figure>
      <img src={micro} alt="Micro's logo" />
    </figure>

    <H2>Async ES6 HTTP microservices</H2>

    <H3>
      <Link href="https://github.com/zeit/micro">zeit.co/micro</Link>
    </H3>

    <style jsx>{`
      figure {
        margin: 0 auto;
        width: 288px;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </Slide>
);
