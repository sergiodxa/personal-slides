import { Component } from "react";
import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";

export default () => (
  <Slide
    title="Backend as a Service"
    basePath="/slides/serverless"
    current={15}
    total={17}
    center
    dark
  >
    <H1>
      <strong>Backend</strong> as a Service
    </H1>
    <p>Reduced development cost</p>
  </Slide>
);
