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
        <Base /> now d<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now do<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now doc<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now dock<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docke<Caret />
      </Frame>
      <Frame duration={2000}>
        <Base /> now docker<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker <Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker -<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --r<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --re<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --reg<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regi<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regio<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --region<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions <Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions b<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions br<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions bru<Caret />
      </Frame>
      <Frame duration={50}>
        <Base /> now docker --regions bru1<Caret />
      </Frame>
      <Frame duration={3000}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong>
      </Frame>
      <Frame duration={500}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <Clipboard write="https://docker-exrzmexyfm.now.sh" />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
      </Frame>
      <Frame duration={500}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying ~/docker under sergiodxa<br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
      </Frame>
      <Frame duration={500}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...
      </Frame>
      <Frame duration={1000}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...<br />
        <span className="gray">></span> info fsevents@1.2.3: The platform
        "linux" is incompatible with this module.<br />
        <span className="gray">></span> info "fsevents@1.2.3" is an optional
        dependency and failed compatibility check. Excluding it from
        installation.<br />
        <span className="gray">></span> [3/4] Linking dependencies...<br />
        <span className="gray">></span> [4/4] Building fresh packages...<br />
        <span className="gray">></span> success Saved lockfile.<br />
        <span className="gray">></span> Done in 2.66s.<br />
      </Frame>
      <Frame duration={1000}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...<br />
        <span className="gray">></span> info fsevents@1.2.3: The platform
        "linux" is incompatible with this module.<br />
        <span className="gray">></span> info "fsevents@1.2.3" is an optional
        dependency and failed compatibility check. Excluding it from
        installation.<br />
        <span className="gray">></span> [3/4] Linking dependencies...<br />
        <span className="gray">></span> [4/4] Building fresh packages...<br />
        <span className="gray">></span> success Saved lockfile.<br />
        <span className="gray">></span> Done in 2.66s.<br />
        <span className="gray">></span> ---> eb6fcabd586e<br />
        <span className="gray">></span> Removing intermediate container
        bd756c97e10d<br />
        <span className="gray">></span> Step 6/8 : COPY index.js /app<br />
        <span className="gray">></span> ---> 0a5d2faebdd1<br />
        <span className="gray">></span> Step 7/8 : EXPOSE 3000<br />
        <span className="gray">></span> ---> Running in 178d31208321<br />
        <span className="gray">></span> ---> 8e2de02582d4<br />
        <span className="gray">></span> Removing intermediate container
        178d31208321<br />
        <span className="gray">></span> Step 8/8 : CMD yarn start<br />
        <span className="gray">></span> ---> Running in c457c46c0501<br />
        <span className="gray">></span> ---> 40da339d6999<br />
        <span className="gray">></span> Removing intermediate container
        c457c46c0501<br />
        <span className="gray">></span> Successfully built 40da339d6999<br />
        <span className="gray">></span> Successfully tagged
        registry.now.systems/now/52b6532e3d2d93b9c479bcc84287178c8d94716d:latest<br />
        <span className="gray">></span> ▲ Storing image
      </Frame>
      <Frame duration={15000}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...<br />
        <span className="gray">></span> info fsevents@1.2.3: The platform
        "linux" is incompatible with this module.<br />
        <span className="gray">></span> info "fsevents@1.2.3" is an optional
        dependency and failed compatibility check. Excluding it from
        installation.<br />
        <span className="gray">></span> [3/4] Linking dependencies...<br />
        <span className="gray">></span> [4/4] Building fresh packages...<br />
        <span className="gray">></span> success Saved lockfile.<br />
        <span className="gray">></span> Done in 2.66s.<br />
        <span className="gray">></span> ---> eb6fcabd586e<br />
        <span className="gray">></span> Removing intermediate container
        bd756c97e10d<br />
        <span className="gray">></span> Step 6/8 : COPY index.js /app<br />
        <span className="gray">></span> ---> 0a5d2faebdd1<br />
        <span className="gray">></span> Step 7/8 : EXPOSE 3000<br />
        <span className="gray">></span> ---> Running in 178d31208321<br />
        <span className="gray">></span> ---> 8e2de02582d4<br />
        <span className="gray">></span> Removing intermediate container
        178d31208321<br />
        <span className="gray">></span> Step 8/8 : CMD yarn start<br />
        <span className="gray">></span> ---> Running in c457c46c0501<br />
        <span className="gray">></span> ---> 40da339d6999<br />
        <span className="gray">></span> Removing intermediate container
        c457c46c0501<br />
        <span className="gray">></span> Successfully built 40da339d6999<br />
        <span className="gray">></span> Successfully tagged
        registry.now.systems/now/52b6532e3d2d93b9c479bcc84287178c8d94716d:latest<br />
        <span className="gray">></span> ▲ Storing image<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>bru1</strong>
      </Frame>
      <Frame duration={5000}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...<br />
        <span className="gray">></span> info fsevents@1.2.3: The platform
        "linux" is incompatible with this module.<br />
        <span className="gray">></span> info "fsevents@1.2.3" is an optional
        dependency and failed compatibility check. Excluding it from
        installation.<br />
        <span className="gray">></span> [3/4] Linking dependencies...<br />
        <span className="gray">></span> [4/4] Building fresh packages...<br />
        <span className="gray">></span> success Saved lockfile.<br />
        <span className="gray">></span> Done in 2.66s.<br />
        <span className="gray">></span> ---> eb6fcabd586e<br />
        <span className="gray">></span> Removing intermediate container
        bd756c97e10d<br />
        <span className="gray">></span> Step 6/8 : COPY index.js /app<br />
        <span className="gray">></span> ---> 0a5d2faebdd1<br />
        <span className="gray">></span> Step 7/8 : EXPOSE 3000<br />
        <span className="gray">></span> ---> Running in 178d31208321<br />
        <span className="gray">></span> ---> 8e2de02582d4<br />
        <span className="gray">></span> Removing intermediate container
        178d31208321<br />
        <span className="gray">></span> Step 8/8 : CMD yarn start<br />
        <span className="gray">></span> ---> Running in c457c46c0501<br />
        <span className="gray">></span> ---> 40da339d6999<br />
        <span className="gray">></span> Removing intermediate container
        c457c46c0501<br />
        <span className="gray">></span> Successfully built 40da339d6999<br />
        <span className="gray">></span> Successfully tagged
        registry.now.systems/now/52b6532e3d2d93b9c479bcc84287178c8d94716d:latest<br />
        <span className="gray">></span> ▲ Storing image<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>bru1</strong><br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        WARNING: Your kernel does not support swap limit capabilities or the
        cgroup is not mounted. Memory limited without swap.
      </Frame>
      <Frame duration={6500}>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...<br />
        <span className="gray">></span> info fsevents@1.2.3: The platform
        "linux" is incompatible with this module.<br />
        <span className="gray">></span> info "fsevents@1.2.3" is an optional
        dependency and failed compatibility check. Excluding it from
        installation.<br />
        <span className="gray">></span> [3/4] Linking dependencies...<br />
        <span className="gray">></span> [4/4] Building fresh packages...<br />
        <span className="gray">></span> success Saved lockfile.<br />
        <span className="gray">></span> Done in 2.66s.<br />
        <span className="gray">></span> ---> eb6fcabd586e<br />
        <span className="gray">></span> Removing intermediate container
        bd756c97e10d<br />
        <span className="gray">></span> Step 6/8 : COPY index.js /app<br />
        <span className="gray">></span> ---> 0a5d2faebdd1<br />
        <span className="gray">></span> Step 7/8 : EXPOSE 3000<br />
        <span className="gray">></span> ---> Running in 178d31208321<br />
        <span className="gray">></span> ---> 8e2de02582d4<br />
        <span className="gray">></span> Removing intermediate container
        178d31208321<br />
        <span className="gray">></span> Step 8/8 : CMD yarn start<br />
        <span className="gray">></span> ---> Running in c457c46c0501<br />
        <span className="gray">></span> ---> 40da339d6999<br />
        <span className="gray">></span> Removing intermediate container
        c457c46c0501<br />
        <span className="gray">></span> Successfully built 40da339d6999<br />
        <span className="gray">></span> Successfully tagged
        registry.now.systems/now/52b6532e3d2d93b9c479bcc84287178c8d94716d:latest<br />
        <span className="gray">></span> ▲ Storing image<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>bru1</strong><br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        WARNING: Your kernel does not support swap limit capabilities or the
        cgroup is not mounted. Memory limited without swap.<br />
        <span className="gray">></span> <span className="gray">[0]</span> yarn
        run v1.5.1<br />
        <span className="gray">></span> <span className="gray">[0]</span> $
        micro<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro:
        Accepting connections on port 3000
      </Frame>
      <Frame>
        <Base /> now docker --regions <strong>bru1</strong>
        <br />
        <span className="gray">></span> Deploying <strong>~/docker</strong> under <strong>sergiodxa</strong><br />
        <span className="gray">></span>{" "}
        <EM>
          <Link external href="https://docker-exrzmexyfm.now.sh">
            https://docker-exrzmexyfm.now.sh
          </Link>
        </EM>{" "}
        [in clipboard] (<strong>bru1</strong>){" "}
        <span className="gray">[3s]</span>
        <br />
        <span className="gray">></span> Building…<br />
        <span className="gray">></span> ▲ docker build<br />
        Sending build context to Docker daemon 5.12 kBkB<br />
        <span className="gray">></span> Step 1/8 : FROM node:alpine<br />
        <span className="gray">></span> ---> 7af437a39ec2<br />
        <span className="gray">></span> Step 2/8 : RUN mkdir /app<br />
        <span className="gray">></span> ---> Running in cb5a9e256607<br />
        <span className="gray">></span> ---> 179cc838aafc<br />
        <span className="gray">></span> Removing intermediate container
        cb5a9e256607<br />
        <span className="gray">></span> Step 3/8 : WORKDIR /app<br />
        <span className="gray">></span> ---> 7c29fdf76332<br />
        <span className="gray">></span> Removing intermediate container
        ea95d4c086be<br />
        <span className="gray">></span> Step 4/8 : COPY package.json /app<br />
        <span className="gray">></span> ---> efa136e3a737<br />
        <span className="gray">></span> Step 5/8 : RUN yarn --prod<br />
        <span className="gray">></span> ---> Running in bd756c97e10d<br />
        <span className="gray">></span> yarn install v1.5.1<br />
        <span className="gray">></span> info No lockfile found.<br />
        <span className="gray">></span> [1/4] Resolving packages...<br />
        <span className="gray">></span> [2/4] Fetching packages...<br />
        <span className="gray">></span> info fsevents@1.2.3: The platform
        "linux" is incompatible with this module.<br />
        <span className="gray">></span> info "fsevents@1.2.3" is an optional
        dependency and failed compatibility check. Excluding it from
        installation.<br />
        <span className="gray">></span> [3/4] Linking dependencies...<br />
        <span className="gray">></span> [4/4] Building fresh packages...<br />
        <span className="gray">></span> success Saved lockfile.<br />
        <span className="gray">></span> Done in 2.66s.<br />
        <span className="gray">></span> ---> eb6fcabd586e<br />
        <span className="gray">></span> Removing intermediate container
        bd756c97e10d<br />
        <span className="gray">></span> Step 6/8 : COPY index.js /app<br />
        <span className="gray">></span> ---> 0a5d2faebdd1<br />
        <span className="gray">></span> Step 7/8 : EXPOSE 3000<br />
        <span className="gray">></span> ---> Running in 178d31208321<br />
        <span className="gray">></span> ---> 8e2de02582d4<br />
        <span className="gray">></span> Removing intermediate container
        178d31208321<br />
        <span className="gray">></span> Step 8/8 : CMD yarn start<br />
        <span className="gray">></span> ---> Running in c457c46c0501<br />
        <span className="gray">></span> ---> 40da339d6999<br />
        <span className="gray">></span> Removing intermediate container
        c457c46c0501<br />
        <span className="gray">></span> Successfully built 40da339d6999<br />
        <span className="gray">></span> Successfully tagged
        registry.now.systems/now/52b6532e3d2d93b9c479bcc84287178c8d94716d:latest<br />
        <span className="gray">></span> ▲ Storing image<br />
        <span className="gray">></span> Build completed<br />
        <span className="gray">></span> Verifying instantiation in{" "}
        <strong>bru1</strong>
        <br />
        <span className="gray">></span> <span className="gray">[0]</span>{" "}
        WARNING: Your kernel does not support swap limit capabilities or the
        cgroup is not mounted. Memory limited without swap.<br />
        <span className="gray">></span> <span className="gray">[0]</span> yarn
        run v1.5.1<br />
        <span className="gray">></span> <span className="gray">[0]</span> $
        micro<br />
        <span className="gray">></span> <span className="gray">[0]</span> micro:
        Accepting connections on port 3000<br />
        <span className="gray">></span> <EM>✔</EM> Scaled 1 instance in{" "}
        <strong>bru1</strong> <span className="gray">[33s]</span>
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
        title="Deploying the Docker Container"
        basePath="/slides/local-to-global"
        prev="docker/files"
        next="docker/inspect"
        center
        dark
      >
        <H1>
          <strong>Deploying</strong> the <strong>Docker</strong> Container
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
