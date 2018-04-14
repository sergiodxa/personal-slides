import { Component } from 'react';
import Slide from '../../../components/slide';
import Title from '../../../components/title';
import { List, Item } from '../../../components/list';

export default () => (
  <Slide basePath="/slides/serverless" current={9} total={17} center>
    <Title>
      What's <strong>not</strong> Serverless
    </Title>
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
