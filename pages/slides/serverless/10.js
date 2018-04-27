import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="What about Now.sh?"
    basePath="/slides/serverless"
    current={10}
    total={17}
    center
  >
    <H1>What about Now.sh?</H1>
  </Slide>
);
