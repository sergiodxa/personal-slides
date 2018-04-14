export const List = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      padding-left: 1em;
      list-style-type: none;
    `}</style>
  </ul>
);

export const Item = ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      li {
        text-align: left;
        line-height: 1.5;
      }
      li:before {
        content: "▲";
        padding-right: 1em;
      }
    `}</style>
  </li>
);
