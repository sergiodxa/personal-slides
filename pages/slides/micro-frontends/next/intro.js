import Slide from "components/slide";

export default () => (
  <Slide
    title="Qué es Next.js"
    basePath="/slides/micro-frontends"
    next="next/multi-zones"
    prev="react/use-case-platzi"
    center
    dark
  >
    <img src="https://assets.zeit.co/image/upload/front/assets/design/white-nextjs.png" alt="Next.js Logo" />
    <p>
      Next.js is a lightweight framework for static and server‑rendered applications
    </p>
    <style jsx>{`
      img {
        max-width: 25%;
      }
    `}</style>
  </Slide>
);
