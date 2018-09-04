import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="El Monolito Frontend"
    basePath="/slides/micro-frontends"
    next="micro-frontend"
    prev="que-son"
    center
    split
  >
    <H1>El Monolito Frontend</H1>
    <img src="https://file-iruzmqbbgj.now.sh/" role="presentation" />
    <style jsx>{`
      img {
        max-width: 25%;
      }
    `}</style>
  </Slide>
);
