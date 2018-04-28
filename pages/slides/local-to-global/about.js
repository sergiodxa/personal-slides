import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";

export default () => (
  <Slide
    title="About me"
    basePath="/slides/local-to-global"
    next="now.sh"
    prev="/"
    center
  >
    <H1>
      I'm <strong>Sergio Xalambrí</strong>,{" "}
      <em>
        Software<br /> Developer
      </em>{" "}
      currently working as Lead<br /> Support Engineer at <strong>▲ZEIT</strong>
    </H1>

    <List horizontal>
      <Item><strong>5</strong> years programming</Item>
      <Item><strong>3</strong> jobs</Item>
      <Item><strong>3</strong> countries 🇦🇷🇨🇴🇵🇪</Item>
    </List>
  </Slide>
);
