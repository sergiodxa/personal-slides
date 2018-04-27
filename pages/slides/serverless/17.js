import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";

export default () => (
  <Slide
    title="Questions?"
    basePath="/slides/serverless"
    current={17}
    total={17}
    center
  >
    <H1>Questions?</H1>
  </Slide>
);
