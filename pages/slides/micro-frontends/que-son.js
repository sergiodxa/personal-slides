import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="¿Qué son Micro Frontends?"
    basePath="/slides/micro-frontends"
    next="monolito-frontend"
    prev="about"
    center
  >
    <H1>¿Qué son Micro Frontends?</H1>
    <p>
      En vez de tener una aplicación Frontend monolítica.
      <br />
      Dividimos la aplicación en muchas más pequeñas.
    </p>
  </Slide>
);
