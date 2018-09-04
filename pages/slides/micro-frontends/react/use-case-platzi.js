import Slide from "components/slide";

export default () => (
  <Slide
    title="Use Case: Platzi"
    basePath="/slides/micro-frontends"
    next="next/intro"
    prev="react/use-case"
    center
  >
    <img src="https://file-ughhfyxihx.now.sh/" role="presentation" />
    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </Slide>
);
