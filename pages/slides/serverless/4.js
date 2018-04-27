import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";
import Link from "components/link";

const url = {
  graph: "https://graph.cool/",
  firebase: "https://firebase.google.com/",
  auth0: "https://auth0.com/"
};

export default () => (
  <Slide
    title="Backend as a Service"
    basePath="/slides/serverless"
    current={4}
    total={17}
    center
  >
    <H1>
      <strong>Backend</strong> as a Service
    </H1>
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
