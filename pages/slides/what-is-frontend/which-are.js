import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";

export default () => (
  <Slide
    title="Which of Those Are Frontend?"
    basePath="/slides/what-is-frontend"
    next="what-if"
    prev="about"
    dark
    center
  >
    <H1>Which of Those Are Frontend?</H1>
    <List>
      <Item>Web</Item>
      <Item>Android</Item>
      <Item>iOS</Item>
      <Item>Desktop</Item>
      <Item>CLI</Item>
      <Item>Games</Item>
      <Item>VR/AR</Item>
      <Item>Hardware</Item>
      <Item>IoT</Item>
      <Item>OS</Item>
    </List>
  </Slide>
);
