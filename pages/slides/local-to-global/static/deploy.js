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
  <Keyframes>
    <Frame duration={50}>
      <Base /> l
    </Frame>
    <Frame duration={50}>
      <Base /> ls
    </Frame>
    <Frame duration={5000}>
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
      <Base /> now s<Caret />
    </Frame>
    <Frame duration={50}>
      <Base /> now st<Caret />
    </Frame>
    <Frame duration={50}>
      <Base /> now sta<Caret />
    </Frame>
    <Frame duration={50}>
      <Base /> now stat<Caret />
    </Frame>
    <Frame duration={50}>
      <Base /> now stati<Caret />
    </Frame>
    <Frame duration={1000}>
      <Base /> now static<Caret />
    </Frame>
    <Frame duration={3000}>
      <Base /> now static<br />
      > Deploying <strong>~/static</strong> under <strong>sergiodxa</strong>
      <Caret />
    </Frame>
    <Frame duration={500}>
      <Base /> now static<br />
      > Deploying <strong>~/static</strong> under <strong>sergiodxa</strong>
      <br />
      > <Clipboard write="https://static-sujwmjteki.now.sh" />
      <EM>
        <Link external href="https://static-sujwmjteki.now.sh">
          https://static-sujwmjteki.now.sh
        </Link>
      </EM>{" "}
      [in clipboard] [3s]
      <Caret />
    </Frame>
    <Frame duration={500}>
      <Base /> now static<br />
      > Deploying <strong>~/static</strong> under <strong>sergiodxa</strong>
      <br />
      >{" "}
      <EM>
        <Link external href="https://static-sujwmjteki.now.sh">
          https://static-sujwmjteki.now.sh
        </Link>
      </EM>{" "}
      [in clipboard] [3s]
      <br />
      > <EM>Deployment complete!</EM>
      <Caret />
    </Frame>
    <Frame duration={500}>
      <Base /> now static<br />
      > Deploying <strong>~/static</strong> under <strong>sergiodxa</strong>
      <br />
      >{" "}
      <EM>
        <Link external href="https://static-sujwmjteki.now.sh">
          https://static-sujwmjteki.now.sh
        </Link>
      </EM>{" "}
      [in clipboard] [3s]
      <br />
      > <EM>Deployment complete!</EM>
      <br />
      <Base /> <Caret />
    </Frame>
  </Keyframes>
);

export default class extends Component {
  render() {
    return (
      <Slide
        title="Deploying the Static Website"
        basePath="/slides/local-to-global"
        prev="static/files"
        next="static/inspect"
        center
        dark
        note={
          "Ahora vamos a desplegar el sitio, escribimos `now static` para decirle a Now que haga deploy de la carpeta static y empieza el proceso. Nos da una URL que se copia al portapapeles solo o podemos hacerle click y ahí tenemos nuestro sitio."
        }
      >
        <H1>
          <strong>Deploying</strong> the <strong>Static</strong> Website
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
