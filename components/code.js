import { PureComponent } from "react";

export class CodeSnippet extends PureComponent {
  render() {
    return (
      <div className="codesnippet">
        <pre>
          <code>{this.props.children}</code>
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
          }
          code {
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
            font-size: 13px;
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
            margin-right: 20px;
            user-select: none;
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
            max-width: 448px;
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
