import Slide from "components/slide";
import { H1 } from "components/title";
import FileSystem from "components/file-system/index";

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
  r4g2vs4: {
    id: "r4g2vs4",
    name: "now.json",
    type: "file",
    contentType: "json",
    content: JSON.stringify(
      {
        name: "node",
        alias: "flisol.now.sh",
        env: {
          NODE_ENV: "@env"
        },
        files: ["index.js", "package.json"],
        type: "npm",
        public: true,
        scale: {
          sfo1: { min: 1, max: "auto" },
          bru1: { min: 0, max: "auto" }
        }
      },
      null,
      2
    )
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
    title="Files of Node.js Application"
    basePath="/slides/local-to-global"
    next="node/deploy"
    prev="node"
    center
    dark
  >
    <H1>
      <strong>Files</strong> of <strong>Node.js</strong> Application
    </H1>
    <FileSystem files={files} defaultFile="73i2vx4" />
    <style jsx>{`
      :global(h1) {
        user-select: none;
      }
    `}</style>
  </Slide>
);
