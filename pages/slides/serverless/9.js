import { Component } from "react";
import Slide from "../../../components/slide";
import { H1 } from "../../../components/title";
import { List, Item } from "../../../components/list";

export default () => (
  <Slide
    title="What's not Serverless"
    basePath="/slides/serverless"
    current={9}
    total={17}
    center
  >
    <H1>
      What's <strong>not</strong> Serverless
    </H1>
    <List>
      <Item>
        <strong>Platform</strong> as a Service
      </Item>
      <Item>
        <strong>Infrastructure</strong> as a Service
      </Item>
    </List>
  </Slide>
);
