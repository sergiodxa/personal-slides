import Checkbox from "components/icons/checkbox";
import { ThemeConsumer } from "lib/theme";

export const List = ({
  children,
  horizontal = false,
  align = "space-between",
  ...props
}) => (
  <ul {...props}>
    {children}
    <style jsx>{`
      ul {
        list-style-type: none;
        display: ${horizontal ? "flex" : "initial"};
        padding-left: ${horizontal ? "0" : "1em"};
        justify-content: ${align};
      }
    `}</style>
  </ul>
);

export const Item = ({ children, active = true, ...props }) => (
  <ThemeConsumer>
    {dark => (
      <li {...props}>
        <Checkbox
          on={active}
          bg={dark ? "white" : "black"}
          fg={dark ? "black" : "white"}
        />{" "}
        {children}
        <style jsx>{`
          li {
            text-align: left;
            line-height: 1.5;
          }
        `}</style>
      </li>
    )}
  </ThemeConsumer>
);
