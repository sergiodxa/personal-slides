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
    new Date() - new Date("Fri Apr 27 2018 15:27:38 GMT-0500 (-05)").getTime()
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
          <Base /> now inspect https://docker-exrzmexyfm.now.sh<Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://docker-exrzmexyfm.now.sh<br />
          <span className="gray">
            <Spinner /> Fetching deployment "docker-exrzmexyfm.now.sh" in<br />
            <strong>sergiodxa</strong>
          </span>
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://docker-exrzmexyfm.now.sh<br />
          > Fetched deployment "docker-exrzmexyfm.now.sh" in<br />
          <strong>sergiodxa</strong> <span className="gray">[1s]</span>
          <br />
          <br />
          {"  "}
          <strong>Meta</strong>
          <br />
          {"    "}uid{"         "}IIkqJoMoi8aVA95qTakN7Zh5<br />
          {"    "}name{"        "}docker<br />
          {"    "}state{"       "}READY<br />
          {"    "}type{"        "}DOCKER<br />
          {"    "}url{"         "}docker-exrzmexyfm.now.sh<br />
          {"    "}created{"     "}Fri Apr 27 2018 15:27:38 GMT-0500 (-05) [{
            created
          }]<br />
          <br />
          {"  "}
          <strong>Scale</strong>
          <br />
          {"    "}dc{"          "}min{"        "}max{"        "}current<br />
          {"    "}sfo1{"         "}0{"          "}0{"            "}0<br />
          {"    "}bru1{"         "}0{"          "}1{"            "}1<br />
          <br />
          {"  "}
          <strong>Events</strong>
          <br />
          {"    "}22018-04-27T20:27:39.658Z state <strong>INITIALIZING</strong>
          <br />
          {"    "}22018-04-27T20:27:40.582Z build-start<br />
          {"    "}22018-04-27T20:27:53.487Z build-complete<br />
          {"    "}22018-04-27T20:27:53.603Z state READY<br />
          {"    "}22018-04-27T20:27:57.000Z instance-start{" "}
          <span className="green">(sfo1)</span>
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
        title="Inspecting the Docker Container"
        basePath="/slides/local-to-global"
        prev="docker/deploy"
        next="docker/curl"
        center
        dark
      >
        <H1>
          <strong>Inspecting</strong> the <strong>Docker</strong> Container
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
