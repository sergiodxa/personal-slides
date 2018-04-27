import css from "styled-jsx/css";

import * as colors from "lib/colors";

export const styles = css`
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-strong,
  .hljs-attribute,
  .hljs-symbol,
  .hljs-link {
    color: ${colors.pink};
  }
  /* red */
  .hljs-code,
  .hljs-deletion,
  .hljs-name {
    color: ${colors.red};
  }
  /* green */
  .hljs-bullet,
  .hljs-subst,
  .hljs-title,
  .hljs-section,
  .hljs-emphasis,
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-function,
  .hljs-attr {
    color: ${colors.green};
  }
  /* yellow */
  .hljs-string,
  .hljs-regexp {
    color: ${colors.yellow};
  }
  /* blue */
  .hljs-attribute {
    color: ${colors.blue};
  }
  /* grey */
  .hljs-comment,
  .hljs-quote,
  .hljs-meta {
    color: ${colors.grey};
  }
  /* white */
  .hljs-params,
  .hljs-tag {
    color: ${colors.white};
  }
  /* bold */
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-doctag,
  .hljs-title,
  .hljs-section,
  .hljs-type,
  .hljs-selector-id {
    font-weight: bold;
  }
`;
