import Slide from "components/slide";
import { H1 } from "components/title";
import FileSystem from "components/file-system/index";
import Code from "components/code";

import styleCss from "raw-loader!../../../../data/local-to-global/static/style.css";
import indexHtml from "raw-loader!../../../../data/local-to-global/static/index.html";

const files = {
  aza2v05: {
    id: "aza2v05",
    name: "style.css",
    type: "file",
    contentType: "css",
    content: styleCss
  },
  vrc2v1h: {
    id: "vrc2v1h",
    name: "index.html",
    type: "file",
    contentType: "html",
    content: indexHtml
  }
};

export default () => (
  <Slide
    title="Files of Static Website"
    basePath="/slides/local-to-global"
    next="static/deploy"
    prev="static"
    center
    dark
    note={
      "Empecemos por el más simple, un sitio web estático, estos son los archivos, tenemos un index.html que tiene algunas etiquetas, si se fijan hay un h1 con el título del primero slide, este es el HTML del primer slide, el archivo style.css es el CSS de ese slide. Es un sitio super simple"
    }
  >
    <H1>
    <strong>Files</strong> of <strong>Static</strong> Website
    </H1>
    <FileSystem files={files} defaultFile="vrc2v1h" />
    <style jsx>{`
      :global(h1) {
        user-select: none;
      }
    `}</style>
  </Slide>
);
