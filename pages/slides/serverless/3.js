import { Component } from 'react';
import Slide from '../../../components/slide';
import Title from '../../../components/title';
import { List, Item } from '../../../components/list';
import Link from '../../../components/link';

export default () => (
  <Slide basePath="/slides/serverless" current={3} total={17} center>
    <Title>Types of Serverless</Title>
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
