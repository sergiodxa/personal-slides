import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="What's Serverless?"
    basePath="/slides/serverless"
    current={2}
    total={17}
    center
  >
    <H1>What's Serverless?</H1>
    <p>
      A software architecture where the developer doesn't need to care about
      server administration.
    </p>
  </Slide>
);
