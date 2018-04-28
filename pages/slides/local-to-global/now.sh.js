import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";

export default () => (
  <Slide
    title="now.sh - Realtime Global Deployments"
    basePath="/slides/local-to-global"
    next="regions"
    prev="about"
    center
    dark
    note={
      "Hoy les voy quiero hablar sobre Now, una plataforma para hacer despliegue de sitios web estáticos, aplicaciones de Node.js o cualquier otro tipo de aplicación dentro de un contenedor de Docker"
    }
  >
    <H1>
      <strong>now.sh</strong> - Realtime Global Deployments
    </H1>

    <List horizontal>
      <Item>
        <strong>Static</strong> Websites
      </Item>
      <Item>
        <strong>Node.js</strong> Application
      </Item>
      <Item>
        <strong>Docker</strong> Container
      </Item>
    </List>
  </Slide>
);
