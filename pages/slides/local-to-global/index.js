import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="From Local to Global with a Single Command"
    basePath="/slides/local-to-global"
    next="about"
    prev={null}
    center
    dark
    note={
      "Vamos a ver como podemos llevar una aplicación o sitio web desde nuestra computadora (entorno local) a producción replicado de forma global. Todo con un comando."
    }
  >
    <H1>
      From <strong>Local</strong> to <strong>Global</strong>
      <br /> with a Single Command
    </H1>
  </Slide>
);
