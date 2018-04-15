import { Component } from "react";
import Slide from "../../../components/slide";
import { H1 } from "../../../components/title";
import { CodeSnippet, LN, Signature } from "../../../components/code";

export default () => (
  <Slide
    title="Now Universal"
    basePath="/slides/serverless"
    current={13}
    total={17}
    dark
    center
  >
    <H1>Now Universal</H1>
    <Signature>
      <CodeSnippet>
        <LN>1</LN>
        {`require('http').createServer((req, res) => {\n`}
        <LN>2</LN>
        {`  // the normal HTTP API\n`}
        <LN>3</LN>
        {`  req.headers['content-type']\n`}
        <LN>4</LN>
        {`  req.url\n`}
        <LN>5</LN>
        {`  req.on('data', fn)\n`}
        <LN>6</LN>
        {`  res.end('Hello world')\n`}
        <LN>7</LN>
        {`}).listen(process.env.PORT)\n`}
      </CodeSnippet>
    </Signature>
  </Slide>
);
