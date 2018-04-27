import { white } from "lib/colors"

export default () => (
  <span>
    <style jsx>{`
      span {
        background: ${white};
        display: inline-block;
        width: 7px;
        height: 15px;
        vertical-align: middle;
      }
    `}</style>
  </span>
);