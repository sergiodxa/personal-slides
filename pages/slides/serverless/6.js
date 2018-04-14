import { Component } from 'react';
import Slide from '../../../components/slide';
import Title from '../../../components/title';
import { CodeSnippet, LN, Signature } from '../../../components/code';

export default () => (
  <Slide basePath="/slides/serverless" current={6} total={17}>
    <Title>
      AWS Lambda
    </Title>
    <Signature>
      <CodeSnippet>
        <LN>1</LN>
        {`exports.handler = (`}
        <em>ev, fn</em>
        {`) => {
`}
        <LN>2</LN>
        {`  // custom lambda API
`}
        <LN>3</LN>
        {`  ev.headers['content-type']
`}
        <LN>4</LN>
        {`  ev.queryStringParameters.param
`}
        <LN>5</LN>
        {`  ev.body.message
`}
        <LN>6</LN>
        {`  `}
        <em>{`fn(null, { statusCode: 200 })`}</em>
        {`
`}
        <LN>7</LN>
        {`}
`}
      </CodeSnippet>
    </Signature>
  </Slide>
);