import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";
import Link from "components/link";

export default () => (
  <Slide
    basePath="/slides"
    current={1}
    total={1}
    title="Sergio Xalambrí's Slides"
    center
    dark
  >
    <H1>Slides</H1>
    <List>
      <Item>
        <Link href="/slides/serverless/1">
          Introduction to <strong>Serverless</strong>
        </Link>
      </Item>
      <Item>
        <Link href="/slides/local-to-global/main">
          From <strong>Local</strong> to <strong>Global</strong> with a Single
          Command
        </Link>
      </Item>
    </List>
  </Slide>
);
