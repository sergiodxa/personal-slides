import { Component } from "react";
import Slide from "../../../components/slide";
import Title from "../../../components/title";
import { CodeSnippet, LN, Signature } from "../../../components/code";

export default () => (
  <Slide
    title="Azure Function"
    basePath="/slides/serverless"
    current={8}
    total={17}
  >
    <Title>Azure Function</Title>
    <Signature>
      <CodeSnippet>
        <LN>1</LN>
        {`module.exports = (`}
        <em>ctx, req</em>
        {`) => {
`}
        <LN>2</LN>
        {`  // custom azure API
`}
        <LN>3</LN>
        {`  ctx.headers['content-type']
`}
        <LN>4</LN>
        {`  ctx.query.param
`}
        <LN>5</LN>
        {`  `}
        <em>
          {`ctx.res = { status: 200 }
`}
          <LN>6</LN>
          {`  ctx.done()`}
        </em>
        {`
`}
        <LN>7</LN>
        {`}
`}
      </CodeSnippet>
    </Signature>
  </Slide>
);
