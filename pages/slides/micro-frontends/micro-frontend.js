import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Micro Frontends"
    basePath="/slides/micro-frontends"
    next="react/how-to"
    prev="monolito-frontend"
    center
  >
    <H1>Micro Frontends</H1>
    <img src="https://micro-frontends.org/ressources/diagrams/organisational/verticals-headline.png" role="presentation" />
    <style jsx>{`
      img {
        max-width: 50%;
      }
    `}</style>
  </Slide>
);
