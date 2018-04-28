import { Component, Fragment } from "react";
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
        <Frame duration={50}>
          <Base /> now alias<Caret />
        </Frame>
        <Frame duration={300}>
          <Base /> now alias <Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh <Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh n<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh ne<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nex<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh next<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextg<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgr<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgra<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.s<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.se<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.ser<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.serg<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergi<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergio<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiod<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodx<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.c<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.co<Caret />
        </Frame>
        <Frame duration={50}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.<br />com<Caret />
        </Frame>
        <Frame duration={10000}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.<br />com<br />
          <span className="gray"><Spinner /> Fetching deployment to alias in sergiodxa</span>
        </Frame>
        <Frame duration={10000}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.<br />com<br />
          <span className="gray">></span> Assigning alias nextgram.sergiodxa.com
          to deployment nextg<br />ram-qagyngkxrn.now.sh<br />
          <span className="gray"><Spinner /> Generating certificate</span>
        </Frame>
        <Frame duration={1000}>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.<br />com<br />
          <span className="gray">></span> Assigning alias nextgram.sergiodxa.com
          to deployment nextg<br />ram-qagyngkxrn.now.sh<br />
          <span className="gray">></span> Certificate for sergiodxa.com and
          *.sergiodxa.com (cert_XG<br />AuBT9hpi5QypA) created{" "}
          <span className="gray">[10s]</span>
          <span className="gray"><Spinner /> Creating alias</span>
        </Frame>
        <Frame>
          <Base /> now alias nextgram-qagyngkxrn.now.sh nextgram.sergiodxa.<br />com<br />
          <span className="gray">></span> Assigning alias nextgram.sergiodxa.com
          to deployment nextg<br />ram-qagyngkxrn.now.sh
          <br />
          <span className="gray">></span> Certificate for sergiodxa.com and
          *.sergiodxa.com (cert_XG<br />AuBT9hpi5QypA) created{" "}
          <span className="gray">[10s]</span>
          <br />
          <span className="gray">></span> Success! nextgram.sergiodxa.com now
          points to <strong>nextgram-qag<br />yngkxrn.now.sh</strong>{" "}
          <span className="gray">[30s]</span>
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
        title="Alias the GitHub Repository"
        basePath="/slides/local-to-global"
        prev="node/inspect"
        next="zeit.world"
        center
        dark
      >
        <H1>
          <strong>Alias</strong> the <strong>GitHub</strong> Repository
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
