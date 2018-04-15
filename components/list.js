import { createContext } from "react";

const { Provider, Consumer } = createContext(false);

export const List = ({ children, horizontal = false }) => (
  <ul>
    <Provider value={horizontal}>{children}</Provider>
    <style jsx>{`
      ul {
        padding-left: 1em;
        list-style-type: none;
        display: ${horizontal ? "flex" : "initial"};
        justify-content: space-between;
      }
    `}</style>
  </ul>
);

export const Item = ({ children }) => (
  <Consumer>
    {horizontal => (
      <li>
        {children}
        <style jsx>{`
          li {
            text-align: left;
            line-height: 1.5;
          }
          li:before {
            content: ${horizontal ? "" : "▲"};
            padding-right: 1em;
          }
        `}</style>
      </li>
    )}
  </Consumer>
);
