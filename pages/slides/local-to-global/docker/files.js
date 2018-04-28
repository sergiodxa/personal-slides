import Slide from "components/slide";
import { H1 } from "components/title";
import FileSystem from "components/file-system/index";

import dockerFile from "raw-loader!../../../../data/local-to-global/docker/Dockerfile";

const content = `function main() {
  return new Date().toJSON();
}

module.exports = main;
`;


const files = {
  wve2vkd: {
    id: "wve2vkd",
    name: "index.js",
    type: "file",
    contentType: "javascript",
    content
  },
  p2k2voi: {
    id: "p2k2voi",
    name: "Dockerfile",
    type: "file",
    content: dockerFile
  },
  "73i2vx4": {
    id: "73i2vx4",
    name: "package.json",
    type: "file",
    contentType: "json",
    content: JSON.stringify(
      {
        name: "node",
        version: "1.0.0",
        main: "index.js",
        author: "Sergio Xalambrí <hello@sergiodxa> (https://sergiodxa.com)",
        license: "MIT",
        scripts: {
          dev: "micro-dev",
          start: "micro"
        },
        dependencies: {
          micro: "^9.1.4"
        },
        devDependencies: {
          "micro-dev": "^2.2.2"
        }
      },
      null,
      2
    )
  }
};

export default () => (
  <Slide
    title="Files of Docker Container"
    basePath="/slides/local-to-global"
    next="docker/deploy"
    prev="docker"
    center
    dark
  >
    <H1>
    <strong>Files</strong> of <strong>Docker</strong> Container
    </H1>
    <FileSystem files={files} defaultFile="p2k2voi" />
    <style jsx>{`
      :global(h1) {
        user-select: none;
      }
    `}</style>
  </Slide>
);
