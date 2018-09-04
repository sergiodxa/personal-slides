import Slide from "components/slide";
import FileSystem from "components/file-system/index";

const docsIndex = `import Link from "next/link";

function Docs() {
  return (
    <main>
      <h1>Documentation</h1>
      <Link href="/"><a>Go to home</a></Link>
    </main>
  )
}

export default Docs;
`;

const frontIndex = `import Link from "next/link";

function Home() {
  return (
    <main>
      <h1>Frontend</h1>
      <Link href="/docs"><a>Go to docs</a></Link>
    </main>
  )
}

export default Home;
`;

const docsNextConfig = `const { NODE_ENV } = process.env

module.exports = {
  assetPrefix: NODE_ENV === "production"
    ? "https://docs.company.com"
    : "http://localhost:3000"
}
`;

const frontNextConfig = `const { NODE_ENV } = process.env

module.exports = {
  assetPrefix: NODE_ENV === "production"
    ? "https://front.company.com"
    : "http://localhost:3000"
}
`;

const files = {
  docs: {
    id: "docs",
    name: "docs",
    type: "directory",
    children: ["docs/pages", "docs/next.config.js", "docs/package.json"]
  },
  "docs/pages": {
    id: "docs/pages",
    name: "pages",
    type: "directory",
    parent: "docs",
    children: ["docs/pages/docs"]
  },
  "docs/pages/docs": {
    id: "docs/pages/docs",
    name: "docs",
    type: "directory",
    parent: "docs/pages",
    children: ["docs/pages/docs/index.js"]
  },
  "docs/pages/docs/index.js": {
    id: "docs/pages/docs/index.js",
    name: "index.js",
    type: "file",
    contentType: "js",
    content: docsIndex,
    parent: "docs/pages/docs"
  },
  "docs/next.config.js": {
    id: "docs/next.config.js",
    name: "next.config.js",
    type: "file",
    contentType: "js",
    parent: "docs",
    content: docsNextConfig
  },
  "docs/package.json": {
    id: "docs/package.json",
    name: "package.json",
    type: "file",
    contentType: "json",
    content: JSON.stringify(
      {
        name: "docs",
        dependencies: {
          next: "latest",
          react: "latest",
          "react-dom": "latest"
        }
      },
      null,
      2
    ),
    parent: "front"
  },
  front: {
    id: "front",
    name: "front",
    type: "directory",
    children: ["front/pages", "front/next.config.js", "front/package.json"]
  },
  "front/pages": {
    id: "front/pages",
    name: "pages",
    type: "directory",
    parent: "front",
    children: ["front/pages/index.js"]
  },
  "front/pages/index.js": {
    id: "front/pages/index.js",
    name: "index.js",
    type: "file",
    contentType: "js",
    content: frontIndex,
    parent: "front/pages"
  },
  "front/next.config.js": {
    id: "front/next.config.js",
    name: "next.config.js",
    type: "file",
    contentType: "js",
    parent: "front",
    content: frontNextConfig
  },
  "front/package.json": {
    id: "front/package.json",
    name: "package.json",
    type: "file",
    contentType: "json",
    content: JSON.stringify(
      {
        name: "front",
        dependencies: {
          next: "latest",
          react: "latest",
          "react-dom": "latest"
        }
      },
      null,
      2
    ),
    parent: "front"
  },
  "rules.json": {
    id: "rules.json",
    name: "rules.json",
    type: "file",
    contentType: "json",
    content: JSON.stringify(
      {
        rules: [
          {
            pathname: "/docs**",
            dest: "https://docs.company.com"
          },
          { dest: "https://front.company.com" }
        ]
      },
      null,
      2
    )
  }
};

export default () => (
  <Slide
    title="Ejemplo de Next.js Multi Zones"
    basePath="/slides/micro-frontends"
    next="next/use-case"
    prev="next/multi-zones"
    center
    dark
  >
    <FileSystem files={files} defaultFile="front/package.json" />
  </Slide>
);
