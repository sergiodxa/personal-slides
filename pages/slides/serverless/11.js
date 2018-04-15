import { Component } from "react";
import Slide from "../../../components/slide";
import { H1 } from "../../../components/title";

export default () => (
  <Slide
    title="Now.sh"
    basePath="/slides/serverless"
    current={11}
    total={17}
    dark
    center
  >
    <H1>Now.sh</H1>
    <p>
      <strong>Platform</strong> as a Service and <strong>Serverless</strong>
    </p>
  </Slide>
);
