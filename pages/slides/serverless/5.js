import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";
import Link from "components/link";

export default () => (
  <Slide
    title="Function as a Service"
    basePath="/slides/serverless"
    current={5}
    total={17}
    center
  >
    <H1>
      <strong>Function</strong> as a Service
    </H1>
    <List>
      <Item>
        <Link href="/slides/serverless/6">AWS Lambda</Link>
      </Item>
      <Item>
        <Link href="/slides/serverless/7">Google Cloud Functions</Link>
      </Item>
      <Item>
        <Link href="/slides/serverless/8">Azure Functions</Link>
      </Item>
    </List>
  </Slide>
);
