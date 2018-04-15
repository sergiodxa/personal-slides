import { Component } from "react";
import Slide from "../../../components/slide";
import { H1 } from "../../../components/title";
import { List, Item } from "../../../components/list";

export default () => (
  <Slide
    title="Function as a Service"
    basePath="/slides/serverless"
    current={16}
    total={17}
    center
    dark
  >
    <H1>
      <strong>Function</strong> as a Service
    </H1>
    <p>Reduced scaling costs</p>
  </Slide>
);
