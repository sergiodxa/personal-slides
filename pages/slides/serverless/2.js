import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";

export default () => (
  <Slide
    title="What's Serverless?"
    basePath="/slides/serverless"
    current={2}
    total={17}
    center
  >
    <Title>What's Serverless?</Title>
    <p>
      A software architecture where the developer doesn't need to care about
      server administration.
    </p>
  </Slide>
);
