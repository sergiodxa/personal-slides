import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";

export default () => (
  <Slide
    title="Now.sh"
    basePath="/slides/serverless"
    current={11}
    total={17}
    dark
    center
  >
    <Title>Now.sh</Title>
    <p>
      <strong>Platform</strong> as a Service and <strong>Serverless</strong>
    </p>
  </Slide>
);
