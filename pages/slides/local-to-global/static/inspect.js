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
    new Date() - new Date("Sun Apr 15 2018 20:56:53 GMT-0500 (-05)").getTime()
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
          <Base /> now inspect https://static-sujwmjteki.now.sh<Caret />
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://static-sujwmjteki.now.sh<br />
          <span className="gray">
            <Spinner /> Fetching deployment "https://static-sujwmjteki.now.sh"
            in<br />
            <strong>sergiodxa</strong>
          </span>
        </Frame>
        <Frame duration={1000}>
          <Base /> now inspect https://static-sujwmjteki.now.sh<br />
          > Fetched deployment "static-sujwmjteki.now.sh" in{" "}
          <strong>sergiodxa</strong>
          <br /> [1s]<br />
          <br />
          {"  "}
          <strong>Meta</strong>
          <br />
          {"    "}uid{"         "}4J7f0RI5rd1AABtCBUUi5Fuy<br />
          {"    "}name{"        "}static<br />
          {"    "}state{"       "}READY<br />
          {"    "}type{"        "}STATIC<br />
          {"    "}url{"         "}static-sujwmjteki.now.sh<br />
          {"    "}created{"     "}Sun Apr 15 2018 20:56:53 GMT-0500 (-05) [{
            created
          }]<br />
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
        title="Inspecting the Static Website"
        basePath="/slides/local-to-global"
        prev="static/deploy"
        next="static/curl"
        center
        dark
      >
        <H1>
          <strong>Inspecting</strong> the <strong>Static</strong> Website
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
