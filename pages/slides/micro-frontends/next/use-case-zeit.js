import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Use Case: ZEIT"
    basePath="/slides/micro-frontends"
    next="next/use-case-trulia"
    prev="next/use-case"
    center
    dark
    split
  >
    <figure>
      <img src="https://file-uxbmetnzdl.now.sh/" role="presentation" />
      <figcaption>zeit.co</figcaption>
    </figure>
    <figure>
      <img src="https://file-hxtcpsfnhc.now.sh" role="presentation" />
      <figcaption>zeit.co/docs</figcaption>
    </figure>
    <style jsx>{`
      figure {
        margin: 0;
        width: 40%
      }
      figcaption {
        color: #dedede;
        font-size: .8em;
        padding: 1em 0;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </Slide>
);
