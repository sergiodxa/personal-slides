import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";

export default () => (
  <Slide
    title="Now Universal - Now, on Every Cloud"
    basePath="/slides/serverless"
    current={12}
    total={17}
    dark
    center
  >
    <Title>Now Universal</Title>
    <p>
      <strong>Now</strong>, on Every Cloud
    </p>
  </Slide>
);
