import { Component } from 'react';
import Slide from '../../../components/slide';
import Title from '../../../components/title';
import { CodeSnippet, LN, Signature } from '../../../components/code';

export default () => (
  <Slide basePath="/slides/serverless" current={7} total={17}>
    <Title>
      Google Cloud Function
    </Title>
    <Signature>
      <CodeSnippet>
        <LN>1</LN>
        {`exports.handler = (`}
        <em>req, res</em>
        {`) => {
`}
        <LN>2</LN>
        {`  // node.js "express" API
`}
        <LN>3</LN>
        {`  req.get('content-type')
`}
        <LN>4</LN>
        {`  req.query.param
`}
        <LN>5</LN>
        {`  req.body.message
`}
        <LN>6</LN>
        {`  `}
        <em>{`res.status(200).end()`}</em>
        {`
`}
        <LN>7</LN>
        {`}
`}
      </CodeSnippet>
    </Signature>
  </Slide>
);