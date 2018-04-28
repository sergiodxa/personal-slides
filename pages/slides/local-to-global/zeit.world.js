import Slide from "components/slide";
import { H1, H2 } from "components/title";
import { List, Item } from "components/list";
import WorldMap from "components/world-map/dns";

export default () => (
  <Slide
    title="zeit.world - Low-Latency Global DNS"
    basePath="/slides/local-to-global"
    next="zeit.domains"
    prev="github/alias"
    center
    dark
  >
    <H1>
      <strong>zeit.world</strong> - Low-Latency Global DNS
    </H1>

    <List horizontal>
      <Item>
        <small>
          Dynamic DNS Records
        </small>
      </Item>
      <Item>
        <small>
          Instant Propagation
        </small>
      </Item>
      <Item>
        <small>
          Zero Configuration
        </small>
      </Item>
    </List>

    <WorldMap />
  </Slide>
);
