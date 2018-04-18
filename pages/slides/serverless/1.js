import { Component } from "react";
import Slide from "../../../components/slide";
import { H1 } from "../../../components/title";

export default () => (
  <Slide
    title="Introduction to Serverless"
    basePath="/slides/serverless"
    current={1}
    total={17}
    center
  >
    <H1>Introduction to <strong>Serverless</strong></H1>
  </Slide>
);
