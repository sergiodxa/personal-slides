import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";
import { List, Item } from "../../../components/list";

export default () => (
  <Slide
    title="Backend as a Service"
    basePath="/slides/serverless"
    current={15}
    total={17}
    center
    dark
  >
    <Title>
      <strong>Backend</strong> as a Service
    </Title>
    <p>Reduced development cost</p>
  </Slide>
);
