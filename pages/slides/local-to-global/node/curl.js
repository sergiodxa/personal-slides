import { Component } from "react";
import { Keyframes, Frame } from "react-keyframes";
import ms from "ms";

import Slide from "components/slide";
import { H1 } from "components/title";
import Link from "components/link";
import Terminal from "components/terminal/index";
import Spinner from "components/terminal/spinner";
import Caret from "components/terminal/caret";
import Base from "components/terminal/base";
import Clipboard from "components/clipboard";

import * as colors from "lib/colors";

const EM = ({ children, ...props }) => (
  <em {...props}>
    {children}
    <style jsx>{`
      em,
      em :global(*) {
        color: ${colors.cyan} !important;
        font-style: normal;
        text-decoration: none;
      }
    `}</style>
  </em>
);

const Animation = () => {
  return (
    <div>
      <Keyframes>
      <Frame duration={1000}>
          <Base /> <Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> c<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> cu<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> cur<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> curl<Caret />
        </Frame>
        <Frame duration={300}>
          <Base /> curl <Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> curl https://node-ijomtcugny.now.sh<Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> curl https://node-ijomtcugny.now.sh -I<Caret />
        </Frame>
        <Frame>
          <Base /> curl https://node-ijomtcugny.now.sh -I<br />
          HTTP/2 200<br />
          date: new Date().toString().split('-')[0]<br />
          content-length: 24<br />
          x-now-trace: sfo1<br />
          server: now<br />
          x-now-instance: 2540498034<br />
          accept-ranges: bytes<br />
          <Base /> <Caret />
        </Frame>
      </Keyframes>

      <style jsx>{`
        .gray {
          color: ${colors.gray};
        }
        .green {
          color: ${colors.green};
        }
      `}</style>
    </div>
  );
};

export default class extends Component {
  render() {
    return (
      <Slide
        title="cURL the Node.js Application"
        basePath="/slides/local-to-global"
        prev="node/inspect"
        next="node/alias"
        center
        dark
      >
        <H1>
          <strong>cURL</strong> the <strong>Node.js</strong> Application
        </H1>
        <Terminal title="~">
          <pre>
            <Animation />
          </pre>
        </Terminal>

        <style jsx>{`
          pre {
            margin: 0;
            line-height: 1.25;
            user-select: none;
          }
        `}</style>
      </Slide>
    );
  }
}
