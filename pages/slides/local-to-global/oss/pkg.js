import Slide from "components/slide";
import { H2, H3 } from "components/title";
import Link from "components/link";

import pkg from "url-loader!../../../../static/pkg.png";

export default () => (
  <Slide
    title="pkg - Single-Command Node.js binary compiler"
    basePath="/slides/local-to-global"
    next="oss/hyper"
    prev="oss/next"
    center
    dark
  >
    <figure>
      <img src={pkg} alt="pkg's logo" />
    </figure>

    <H2>Single-Command Node.js binary compiler</H2>

    <H3>
      <Link href="https://github.com/zeit/pkg">zeit.co/pkg</Link>
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
