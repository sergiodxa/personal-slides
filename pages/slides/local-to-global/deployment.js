import Slide from "components/slide";
import Quote from "components/quote";

export default () => (
  <Slide
    title="Deployment"
    basePath="/slides/local-to-global"
    next="static"
    prev="regions"
    center
  >
    <Quote>
      Deployment is the process by which we prepare and store a bootable image
      of your application and its metadata.{" "}
      <strong>Deployments are always global.</strong> Once your code is
      successfully deployed, it runs wherever in the world is it enabled.
    </Quote>
  </Slide>
);
