import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";
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
    <Title>
      <strong>Function</strong> as a Service
    </Title>
    <p>Reduced scaling costs</p>
  </Slide>
);
