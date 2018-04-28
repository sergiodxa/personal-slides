import { Component } from "react";
import { Keyframes, Frame } from "react-keyframes";

import Slide from "components/slide";
import { H1 } from "components/title";
import Link from "components/link";
import Terminal from "components/terminal/index";
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

const Animation = () => (
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
        <Base /> now n<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now no<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-e<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-ex<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-exa<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-exam<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examp<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-exampl<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-example<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/n<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/ne<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/nex<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/next<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/nextg<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/nextgr<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now now-examples/nextgra<Caret />
      </Frame>
      <Frame duration={3000}>
        <Base /> now now-examples/nextgram<Caret />
      </Frame>
      <Frame duration={4000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...
      </Frame>
      <Frame duration={5000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
      </Frame>
      <Frame duration={2500}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <Clipboard write="https://nextgram-qagyngkxrn.now.sh" />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
      </Frame>
      <Frame duration={2500}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…
      </Frame>
      <Frame duration={4000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…
      </Frame>
      <Frame duration={5500}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…<br />
        <span className="gray">></span> ✓ Installed 734 modules [4s]<br />
        <span className="gray">></span> ▲ npm run build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> nextgram@ build /home/nowuser/src<br />
        <span className="gray">></span> next build<br />
        <span className="gray">></span>
      </Frame>
      <Frame duration={3000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…<br />
        <span className="gray">></span> ✓ Installed 734 modules [4s]<br />
        <span className="gray">></span> ▲ npm run build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> nextgram@ build /home/nowuser/src<br />
        <span className="gray">></span> next build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> ▲ Snapshotting deployment
      </Frame>
      <Frame duration={5000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…<br />
        <span className="gray">></span> ✓ Installed 734 modules [4s]<br />
        <span className="gray">></span> ▲ npm run build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> nextgram@ build /home/nowuser/src<br />
        <span className="gray">></span> next build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> ▲ Saving deployment image (14.4M)
      </Frame>
      <Frame duration={19000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…<br />
        <span className="gray">></span> ✓ Installed 734 modules [4s]<br />
        <span className="gray">></span> ▲ npm run build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> nextgram@ build /home/nowuser/src<br />
        <span className="gray">></span> next build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> ▲ Saving deployment image (14.4M)<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong>
      </Frame>
      <Frame duration={2000}>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…<br />
        <span className="gray">></span> ✓ Installed 734 modules [4s]<br />
        <span className="gray">></span> ▲ npm run build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> nextgram@ build /home/nowuser/src<br />
        <span className="gray">></span> next build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> ▲ Saving deployment image (14.4M)<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        nextgram@ start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        NODE_ENV=production next start<br />
        <span className="gray">></span> <span className="gray">[0]</span>
      </Frame>
      <Frame>
        <Base /> now now-examples/nextgram<br />
        <span className="gray">></span> Didn't find directory. Searching on
        GitHub...<br />
        <span className="gray">></span> Deploying GitHub repository{" "}
        <strong>"now-examples/nextgram"</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://nextgram-qagyngkxrn.now.sh">
            https://nextgram-qagyngkxrn.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>){" "}
        <span className="gray">[9s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ✓ Using "package-lock.json"<br />
        <span className="gray">></span> ⧗ Installing 5 main dependencies…<br />
        <span className="gray">></span> ✓ Installed 734 modules [4s]<br />
        <span className="gray">></span> ▲ npm run build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> nextgram@ build /home/nowuser/src<br />
        <span className="gray">></span> next build<br />
        <span className="gray">></span>
        <br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> ▲ Saving deployment image (14.4M)<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        nextgram@ start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        NODE_ENV=production next start<br />
        <span className="gray">></span> <span className="gray">[0]</span>
        <br />
        <span className="gray">></span> <EM>✔</EM> Scaled 1 instance in{" "}
        <strong>sfo1</strong> <span className="gray">[20s]</span>
        <br />
        <span className="gray">></span> <EM>Success!</EM> Deployment ready<br />
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

export default class extends Component {
  render() {
    return (
      <Slide
        title="Deploying the GitHub Repository"
        basePath="/slides/local-to-global"
        prev="github"
        next="github/inspect"
        center
        dark
      >
        <H1>
          <strong>Deploying</strong> the <strong>GitHub</strong> Repository
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
