import Slide from "components/slide";
import { H2, H3 } from "components/title";
import Link from "components/link";

import next from "url-loader!../../../../static/next.png";

export default () => (
  <Slide
    title="Next - A minimalistic framework for server- rendered React applications"
    basePath="/slides/local-to-global"
    next="oss/pkg"
    prev="oss/micro"
    center
    dark
  >
    <figure>
      <img src={next} alt="Next's logo" />
    </figure>

    <H2>A minimalistic framework for server- rendered React applications</H2>

    <H3>
      <Link href="https://nextjs.org">nextjs.org</Link>
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
