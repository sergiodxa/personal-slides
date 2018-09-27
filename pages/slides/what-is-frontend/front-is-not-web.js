import Slide from "components/slide";
import { H2 } from "components/title";
import { List, Item } from "components/list";

export default () => (
  <Slide
    title="Frontend Is Not Web"
    basePath="/slides/what-is-frontend"
    next="front-is-client"
    prev="what-if"
    dark
    center
  >
    <H2>Frontend Is Not About...</H2>
    <List horizontal align="space-around" style={{ width: '400px' }}>
      <Item>HTML</Item>
      <Item>CSS</Item>
      <Item>JS</Item>
      <Item>The Web</Item>
    </List>
  </Slide>
);
