import { Component } from "react";
import Slide from "../../../components/slide";
import { H1 } from "../../../components/title";
import { List, Item } from "../../../components/list";
import Link from "../../../components/link";

export default () => (
  <Slide
    title="Types of Serverless"
    basePath="/slides/serverless"
    current={3}
    total={17}
    center
  >
    <H1>Types of Serverless</H1>
    <List>
      <Item>
        <Link href="/slides/serverless/4">
          <strong>Backend</strong> as a Service
        </Link>
      </Item>
      <Item>
        <Link href="/slides/serverless/5">
          <strong>Function</strong> as a Service
        </Link>
      </Item>
    </List>
  </Slide>
);
