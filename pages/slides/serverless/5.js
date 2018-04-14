import { Component } from 'react';
import Slide from '../../../components/slide';
import Title from '../../../components/title';
import { List, Item } from '../../../components/list';
import Link from '../../../components/link';

export default () => (
  <Slide basePath="/slides/serverless" current={5} total={17} center>
    <Title>
      <strong>Function</strong> as a Service
    </Title>
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
