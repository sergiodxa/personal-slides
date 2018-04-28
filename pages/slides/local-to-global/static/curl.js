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
          <Base /> curl https://static-sujwmjteki.now.sh<Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> curl https://static-sujwmjteki.now.sh -I<Caret />
        </Frame>
        <Frame>
          <Base /> curl https://static-sujwmjteki.now.sh -I<br />
          HTTP/2 200<br />
          date: {new Date().toString().split('-')[0]}<br />
          content-type: text/html; charset=utf-8<br />
          content-length: 577<br />
          access-control-allow-origin: *<br />
          access-control-allow-methods: GET<br />
          access-control-allow-headers: Authorization, Accept, <br />Content-Type<br />
          etag: "e13ac21ff2b477c7088f7257fba2e4b1fa49c9d3"<br />
          x-now-trace: sfo1<br />
          server: now<br />
          x-now-cache: HIT<br />
          accept-ranges: bytes<br />
          <Base /> <Caret />
        </Frame>
      </Keyframes>

      <style jsx>{`
        .gray {
          color: ${colors.gray};
        }
      `}</style>
    </div>
  );
};

export default class extends Component {
  render() {
    return (
      <Slide
        title="cURL the Static Website"
        basePath="/slides/local-to-global"
        prev="static/inspect"
        next="node"
        center
        dark
      >
        <H1>
          <strong>cURL</strong> the <strong>Static</strong> Website
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
