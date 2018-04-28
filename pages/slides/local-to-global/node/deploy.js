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
      <Frame duration={50}>
        <Base /> l
      </Frame>
      <Frame duration={50}>
        <Base /> ls
      </Frame>
      <Frame duration={3000}>
        <Base /> ls<br />
        <EM>static</EM>{"   "}<EM>node</EM>{"   "}<EM>docker</EM><br />
        <Base /> <Caret />
      </Frame>
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
        <Base /> now nod<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now node<Caret />
      </Frame>
      <Frame duration={3000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
      </Frame>
      <Frame duration={2000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <Clipboard write="https://node-hjypnqlchq.now.sh" />
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
      </Frame>
      <Frame duration={4000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…
      </Frame>
      <Frame duration={5000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…
      </Frame>
      <Frame duration={2000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…<br />
        <span className="gray">></span> ▲ Snapshotting deployment
      </Frame>
      <Frame duration={5000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…<br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong> and <strong>bru1</strong>
      </Frame>
      <Frame duration={100}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…<br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong> and <strong>bru1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro:
        Accepting connections on port 3000
      </Frame>
      <Frame duration={1000}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…<br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong> and <strong>bru1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro:
        Accepting connections on port 3000<br />
        <span className="gray">></span> <span className="gray">[1]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[1]</span> micro<br />
        <span className="gray">></span> <span className="gray">[1]</span> micro:
        Accepting connections on port 3000
      </Frame>
      <Frame duration={100}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…<br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong> and <strong>bru1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro:
        Accepting connections on port 3000<br />
        <span className="gray">></span> <span className="gray">[1]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[1]</span> micro<br />
        <span className="gray">></span> <span className="gray">[1]</span> micro:
        Accepting connections on port 3000<br />
        <span className="gray">></span> <EM>✔</EM> Scaled 1 instance in{" "}
        <strong>sfo1</strong> <span className="gray">[5s]</span>
        <br />
        <span className="gray">></span> <EM>✔</EM> Scaled 1 instance in{" "}
        <strong>bru1</strong> <span className="gray">[6s]</span>
      </Frame>
      <Frame duration={100}>
        <Base /> now node<br />
        <span className="gray">></span> Deploying <strong>~/node</strong> under{" "}
        <strong>sergiodxa</strong>
        <br />
        <span className="gray">></span> Using Node.js <strong>8.11.1</strong>{" "}
        (default)<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://node-hjypnqlchq.now.sh">
            https://node-hjypnqlchq.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>sfo1</strong>, <strong>bru1</strong>)<br />{" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ npm install<br />
        <span className="gray">></span> ⧗ Installing 2 main dependencies…<br />
        <span className="gray">></span> ▲ Snapshotting deployment<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>sfo1</strong> and <strong>bru1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro:
        Accepting connections on port 3000<br />
        <span className="gray">></span> <span className="gray">[1]</span>{" "}
        node@1.0.0 start /home/nowuser/src<br />
        <span className="gray">></span> <span className="gray">[1]</span> micro<br />
        <span className="gray">></span> <span className="gray">[1]</span> micro:
        Accepting connections on port 3000<br />
        <span className="gray">></span> <EM>✔</EM> Scaled 1 instance in{" "}
        <strong>sfo1</strong> <span className="gray">[5s]</span>
        <br />
        <span className="gray">></span> <EM>✔</EM> Scaled 1 instance in{" "}
        <strong>bru1</strong> <span className="gray">[6s]</span>
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
        title="Deploying the Node.js Application"
        basePath="/slides/local-to-global"
        prev="node/files"
        next="node/inspect"
        center
        dark
      >
        <H1>
          <strong>Deploying</strong> the <strong>Node.js</strong> Application
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
