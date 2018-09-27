import Slide from "components/slide";
import { H1 } from "components/title";
import Quote from "components/quote";

export default () => (
  <Slide
    title="Definition of Client-Server"
    basePath="/slides/what-is-frontend"
    next="client-platforms"
    prev="client-server"
    dark
    center
  >
    <H1>Definition of Client-Server</H1>
    <Quote style={{ width: '600px' }}>
      The client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.
    </Quote>
  </Slide>
);
