import { Component } from 'react';
import Slide from '../../../components/slide';
import Title from '../../../components/title';
import { List, Item } from '../../../components/list';
import Link from '../../../components/link';

const url = {
  graph: 'https://graph.cool/',
  firebase: 'https://firebase.google.com/',
  auth0: 'https://auth0.com/'
};

export default () => (
  <Slide basePath="/slides/serverless" current={4} total={17} center>
    <Title>
      <strong>Backend</strong> as a Service
    </Title>
    <List>
      <Item>
        <Link href={url.graph} external>
          Graph.cool
        </Link>
      </Item>
      <Item>
        <Link href={url.firebase} external>
          Firebase
        </Link>
      </Item>
      <Item>
        <Link href={url.auth0} external>
          Auth0
        </Link>
      </Item>
    </List>
  </Slide>
);