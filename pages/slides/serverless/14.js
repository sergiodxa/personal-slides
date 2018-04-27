import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="When to use Serverless?"
    basePath="/slides/serverless"
    current={14}
    total={17}
    center
    dark
  >
    <H1>When to use Serverless?</H1>
  </Slide>
);
