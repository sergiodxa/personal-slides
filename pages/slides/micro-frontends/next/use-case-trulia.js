import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Use Case: Trulia"
    basePath="/slides/micro-frontends"
    next="next/use-case-bonus"
    prev="next/use-case-zeit"
    center
    dark
  >
    <figure>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/f7BMSVhZan0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <figcaption>https://www.youtube.com/watch?v=f7BMSVhZan0</figcaption>
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
