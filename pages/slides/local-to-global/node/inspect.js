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
  const created = ms(
    new Date() - new Date("Fri Apr 27 2018 23:02:13 GMT-0500").getTime()
  );

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
          <Base /> now i<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now in<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now ins<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now insp<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now inspe<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now inspec<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now inspect<Caret />
        </Frame>
        <Frame duration={300}>
          <Base /> now inspect <Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://node-hjypnqlchq.now.sh<Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://node-hjypnqlchq.now.sh<br />
          <span className="gray">
            <Spinner /> Fetching deployment "https://node-hjypnqlchq.now.sh" in<br />
            <strong>sergiodxa</strong>
          </span>
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://node-hjypnqlchq.now.sh<br />
          > Fetched deployment "node-hjypnqlchq.now.sh" in{" "}
          <strong>sergiodxa</strong>
          <br /> [1s]<br />
          <br />
          {"  "}
          <strong>Meta</strong>
          <br />
          {"    "}uid{"         "}MIRifeqKHHseggi3U1ZJqwua<br />
          {"    "}name{"        "}node<br />
          {"    "}state{"       "}READY<br />
          {"    "}type{"        "}NPM<br />
          {"    "}url{"         "}node-hjypnqlchq.now.sh<br />
          {"    "}created{"     "}Fri Apr 27 2018 23:02:13 GMT-0500 [{
            created
          }]<br />
          <br />
          {"  "}
          <strong>Scale</strong>
          <br />
          {"    "}dc{"          "}min{"        "}max{"        "}current<br />
          {"    "}sfo1{"         "}1{"          "}10{"           "}1<br />
          {"    "}bru1{"         "}0{"          "}10{"           "}1<br />
          <br />
          {"  "}
          <strong>Events</strong>
          <br />
          {"    "}2018-04-18T22:31:37.272Z state <strong>INITIALIZING</strong>
          <br />
          {"    "}2018-04-18T22:31:38.819Z build-start<br />
          {"    "}2018-04-18T22:31:52.262Z build-complete<br />
          {"    "}2018-04-18T22:31:52.342Z state <strong>READY</strong>
          <br />
          {"    "}2018-04-18T22:31:54.000Z instance-start{" "}
          <span className="green">(sfo1)</span>
          <br />
          {"    "}2018-04-18T22:32:00.000Z instance-start{" "}
          <span className="green">(bru1)</span>
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
        title="Inspecting the Node.js Application"
        basePath="/slides/local-to-global"
        prev="node/deploy"
        next="node/curl"
        center
        dark
      >
        <H1>
          <strong>Inspecting</strong> the <strong>Node.js</strong> Application
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
