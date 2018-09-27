import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";

export default ({ basePath = "/slides", next = null, prev = "/" } = {}) => (
  <Slide
    title="About Me"
    basePath={basePath}
    next={next}
    prev={prev}
    center
  >
    <H1>
      I'm <strong>Sergio Xalambrí</strong>,{" "}
      <em>
        Senior Software
        <br /> Engineer
      </em>{" "}
      currently working at <strong>Able</strong>
    </H1>

    <List horizontal align="space-around" style={{ width: '500px' }}>
      <Item><strong>5</strong> years programming</Item>
      <Item><strong>4</strong> jobs</Item>
      <Item><strong>3</strong> countries 🇦🇷🇨🇴🇵🇪</Item>
    </List>
  </Slide>
);
