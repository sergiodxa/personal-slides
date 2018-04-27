import { grey } from "../lib/colors"

export default ({ children }) => (
  <blockquote>
    {children}
    <style jsx>{`
      hr {
        border: none;
      }
      blockquote {
        text-align: center;
      }

      blockquote:after,
      blockquote:before {
        content: ' ';
        background-color: ${grey};
        height: 1px;
        width: 12.5%;
        margin: 2em auto;
        display: block;
      }
    `}</style>
  </blockquote>
);
