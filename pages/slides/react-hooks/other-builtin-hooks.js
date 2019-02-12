import Slide from "components/slide";
import { H1 } from "components/title";
import { List, Item } from "components/list";
import Link from "components/link";

export default () => (
  <Slide
    title="Other Built-In Hooks"
    basePath="/slides/react-hooks"
    next="third-party-hooks"
    prev="using-use-local-state"
    center
  >
    <H1>Other Built-In Hooks</H1>
    <List>
      <Item>
        <Link href="https://reactjs.org/docs/hooks-reference.html#usereducer">
          useReducer
        </Link>{" "}
        - <strong>Control state using a reducer function (as in Redux)</strong>
      </Item>
      <Item>
        <Link href="https://reactjs.org/docs/hooks-reference.html#usecallback">
          useCallback
        </Link>{" "}
        - <strong>Memoize a function</strong>
      </Item>
      <Item>
        <Link href="https://reactjs.org/docs/hooks-reference.html#usememo">
          useMemo
        </Link>{" "}
        - <strong>Memoize a computed value</strong>
      </Item>
      <Item>
        <Link href="https://reactjs.org/docs/hooks-reference.html#useimperativehandle">
          useImperativeHandle
        </Link>{" "}
        - <strong>Add imperative code to a ref</strong>
      </Item>
      <Item>
        <Link href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect">
          useLayoutEffect
        </Link>{" "}
        - <strong>Run effects synchronously after all DOM mutations</strong>
      </Item>
      <Item>
        <Link href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue">
          useDebugValue
        </Link>{" "}
        - <strong>Display a custom label in the React DevTools</strong>
      </Item>
    </List>
  </Slide>
);
