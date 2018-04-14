import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";

export default () => (
  <Slide
    title="What about Now.sh?"
    basePath="/slides/serverless"
    current={10}
    total={17}
    center
  >
    <Title>What about Now.sh?</Title>
  </Slide>
);
