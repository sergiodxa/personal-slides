import Slide from "components/slide";
import { H1, H2 } from "components/title";
import { List, Item } from "components/list";
import WorldMap from "components/world-map/dc";

export default () => (
  <Slide
    title="Global Regions"
    basePath="/slides/local-to-global"
    prev="now.sh"
    next="deployment"
    center
    dark
  >
    <H1>
      Global <strong>Regions</strong>
    </H1>

    <List horizontal align="space-around">
      <Item>
          Anycast Routing
      </Item>
      <Item>
          Effortless CDN
      </Item>
    </List>

    <WorldMap />
  </Slide>
);
