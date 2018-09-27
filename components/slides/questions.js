import Slide from "components/slide";
import { H1 } from "components/title";
import Link from "components/link";

export default ({
  basePath = "/slides",
  ...props
} = {}) => (
  <Slide
    title="Any Questions?"
    basePath={basePath}
    center
    {...props}
  >
    <H1>
      Any <strong>Questions</strong>?
    </H1>
    <p>
      <Link href={basePath}>
        https://sergiodxa.com
        {basePath}
      </Link>
    </p>
    <style jsx>{`
      p {
        position: fixed;
        bottom: 5vh;
        width: 500px;
      }
    `}</style>
  </Slide>
);
