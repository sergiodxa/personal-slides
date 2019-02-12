import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";
import Link from "components/link";

export default () => (
  <Slide
    title="Third-Party Custom Hooks"
    basePath="/slides/react-hooks"
    next="questions"
    prev="other-builtin-hooks"
    center
  >
    <H1>Third-Party Custom Hooks</H1>
    <List>
      <Item>
        <Link href="https://usehooks.com/">useHooks</Link> -{" "}
        <strong>Easy to understand React Hook recipes</strong>
      </Item>
      <Item>
        <Link href="https://rehooks.com">rehooks</Link> -{" "}
        <strong>React Hooks for Everything</strong>
      </Item>
      <Item>
        <Link href="https://github.com/palmerhq/the-platform">
          The Platform
        </Link>{" "}
        -{" "}
        <strong>
          Web API's turned into React Hooks and Suspense-friendly React
          components
        </strong>
      </Item>
      <Item>
        <Link href="https://github.com/kitze/react-hanger">react-hanger</Link> -{" "}
        <strong>A small collection of useful hooks</strong>
      </Item>
      <Item>
        <Link href="https://github.com/rehooks/awesome-react-hooks">awesome-react-hooks</Link> -{" "}
        <strong>Awesome React Hooks Resources</strong>
      </Item>
    </List>
  </Slide>
);
