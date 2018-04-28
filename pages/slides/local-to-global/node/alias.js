import { Component, Fragment } from "react";
import { Keyframes, Frame } from "react-keyframes";
import ms from "ms";

import Slide from "components/slide";
import { H1 } from "components/title";
import Link from "components/link";
import Terminal from "components/terminal/index";
import Spinner from "components/terminal/spinner";
import Caret from "components/terminal/caret";
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

const Base = () => (
  <Fragment>
    ▲ <strong>node</strong> at <strong>master</strong>
  </Fragment>
);

const Animation = () => {
  return (
    <div>
      <Keyframes>
        <Frame duration={1000}>
          <Base /> <Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> n<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> no<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now <Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now a<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now al<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now ali<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alia<Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> now alias<Caret />
        </Frame>
        <Frame duration={3000}>
          <Base /> now alias<br />
          <Spinner /> Fetching deployment to alias in sergiodxa
        </Frame>
        <Frame duration={1000}>
          <Base /> now alias<br />
          <span className="gray">></span> Assigning alias flisol.now.sh to
          deployment node-hjypnqlch<br />q.now.sh<br />
          <Spinner /> Creating alias
        </Frame>
        <Frame>
          <Base /> now alias<br />
          <span className="gray">></span> Assigning alias flisol.now.sh to
          deployment node-hjypnqlch<br />q.now.sh<br />
          <EM>> Success!</EM> flisol.now.sh now points to{" "}
          <strong>
            node-hjypnqlchq.now.<br />sh
          </strong>
          <span className="gray">[3s]</span>
          <br />
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
        title="Alias the Node.js Application"
        basePath="/slides/local-to-global"
        prev="node/curl"
        next="docker"
        center
        dark
      >
        <H1>
          <strong>Alias</strong> the <strong>Node.js</strong> Application
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
