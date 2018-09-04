import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Cómo hacerlo con React.js"
    basePath="/slides/micro-frontends"
    next="react/example"
    prev="micro-frontend"
    center
    dark
  >
    <H1>Cómo hacerlo con React.js</H1>
    <p>
      Resulta ReactDOM se puede ejecutar varias veces en diferentes nodos
      <br />
      <br />
      Así que podríamos crear un componente por aplicación
      <br />
      <br />
      Y renderizar varias aplicaciones en la misma página 🤔
    </p>
  </Slide>
);
