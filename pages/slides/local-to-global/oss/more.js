import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";
import Link from "components/link";

export default () => (
  <Slide
    title="And Much More!"
    basePath="/slides/local-to-global"
    next="questions"
    prev="oss/hyper"
    center
    dark
  >
    <H1>And Much More!</H1>

    <List>
      <Item>
        <Link href="https://github.com/zeit/now-cli">now-cli</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/now-desktop">now-desktop</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/release">release</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/styled-jsx">styled-jsx</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/serve">serve</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/hazel">hazel</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/react-keyframes">
          react-keyframes
        </Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/micro-proxy">micro-proxy</Link>
      </Item>
      <Item>
        <Link href="https://github.com/zeit/now-env">now-env</Link>
      </Item>
      <Item>
        <Link href="https://zeit.co/oss">And Even More!</Link>
      </Item>
    </List>
  </Slide>
);
