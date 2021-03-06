import { PureComponent, Fragment } from "react";
import { bool, string } from "prop-types";
import cn from "classnames";

export class CodeSnippet extends PureComponent {
  static propTypes = {
    shell: bool,
  }

  static defaultProps = {
    shell: false
  }

  render() {
    const className = cn({
      shell: this.props.shell
    })

    return (
      <div className="codesnippet">
        <pre>
          <code className={className}>{this.props.children}</code>
        </pre>
        <style jsx>{`
          .codesnippet {
            border: 1px solid #4a4a4a;
            padding: 16px;
          }
          pre {
            margin: 0;
            overflow: scroll;
            padding: 10px 10px 10px 0;
            max-height: 50vh;
          }
          code {
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
            font-size: 13px;
          }
          .shell {
            color: rgb(92, 230, 205);
          }
        `}</style>
      </div>
    );
  }
}

export class LN extends PureComponent {
  render() {
    return (
      <span>
        {this.props.children}
        <style jsx>{`
          span {
            color: #4a4a4a;
            margin-right: 10px;
            user-select: none;
            text-align: right;
            width: 1.5em;
            display: inline-block;
          }
        `}</style>
      </span>
    );
  }
}

export class Signature extends PureComponent {
  render() {
    return (
      <div className="signature">
        {this.props.children}
        <style jsx>{`
          .signature {
            display: inline-block;
            margin: 40px;
            text-align: left;
            width: 70vw;
            max-width: 50vw;
          }
          .signature :global(em) {
            color: #ff0099;
            font-style: normal;
          }
        `}</style>
      </div>
    );
  }
}

export default class Code extends PureComponent {
  static propTypes = {
    children: string.isRequired,
    shell: bool,
    plain: bool
  };
  static defaultProps = {
    plain: false,
    shell: false
  };

  render() {
    const { shell, plain } = this.props;
    return (
      <Signature>
        <CodeSnippet shell={shell}>
          {this.props.children.split("\n").map((code, number) => {
            return (
              <Fragment key={number}>
                {!shell && <LN>{number + 1}</LN>}
                {plain ? <span>{code}</span> : <span dangerouslySetInnerHTML={{ __html: code }} />}
                <br />
              </Fragment>
            );
          })}
        </CodeSnippet>
      </Signature>
    );
  }
}
