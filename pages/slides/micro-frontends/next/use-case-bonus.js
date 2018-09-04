import Slide from "components/slide";
import { H1 } from "components/title";
import Code from "components/code";

const code = `const { NOW_URL } = process.env;
const { alias } = require("./now.json");

module.exports = {
  assetPrefix: NOW_URL
    ? \`https://\${alias[1]}\`
    : "http://localhost:3000"
};
`

export default () => (
  <Slide
    title="Use Case: Bonus"
    basePath="/slides/micro-frontends"
    next="thanks"
    prev="next/use-case-trulia"
    center
    dark
  >
    <H1>This Slides</H1>
    <Code>{code}</Code>
  </Slide>
);
