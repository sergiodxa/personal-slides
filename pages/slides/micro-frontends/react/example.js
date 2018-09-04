import Slide from "components/slide";
import FileSystem from "components/file-system/index";

const mainJS = `import InspireApp from "@company/inspire";
import SearchApp from "@company/search";
import ProductApp from "@company/product";
import CheckoutApp from "@company/checkout";

ReadDOM.render(<InspireApp />, document.getElementById("inspire"));
ReadDOM.render(<SearchApp />, document.getElementById("search"));
ReadDOM.render(<ProductApp />, document.getElementById("product"));
ReadDOM.render(<CheckoutApp />, document.getElementById("checkout"));
`

const mainAltJS = `import InspireApp from "@company/inspire";
import SearchApp from "@company/search";
import ProductApp from "@company/product";
import CheckoutApp from "@company/checkout";

const $inspire = document.getElementById("inspire");
const $search = document.getElementById("search");
const $product = document.getElementById("product");
const $checkout = document.getElementById("checkout");

if ($inspire) {
  ReadDOM.render(<InspireApp />, $inspire);
}

if ($search) {
  ReadDOM.render(<SearchApp />, $search);
}

if ($product) {
  ReadDOM.render(<ProductApp />, $product);
}

if ($checkout) {
  ReadDOM.render(<CheckoutApp />, $checkout);
}
`

const files = {
  aza2v05: {
    id: "aza2v05",
    name: "main.js",
    type: "file",
    contentType: "js",
    content: mainJS
  },
  vrc2v1h: {
    id: "vrc2v1h",
    name: "main-alt.js",
    type: "file",
    contentType: "javascript",
    content: mainAltJS
  }
};

export default () => (
  <Slide
    title="Ejemplo de Micro Frontends con React"
    basePath="/slides/micro-frontends"
    next="react/use-case"
    prev="react/how-to"
    center
    dark
  >
    <FileSystem files={files} defaultFile="aza2v05" />
  </Slide>
);
