import Slide from "components/slide";
import { H2, H3 } from "components/title";
import Link from "components/link";

import hyper from "url-loader!../../../../static/hyper.png";

export default () => (
  <Slide
    title="Hyper - A terminal built on web technologies"
    basePath="/slides/local-to-global"
    next="oss/more"
    prev="oss/pkg"
    center
    dark
  >
    <figure>
      <img src={hyper} alt="Hyper's logo" />
    </figure>

    <H2>A terminal built on web technologies</H2>

    <H3>
      <Link href="https://hyper.is">hyper.is</Link>
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
