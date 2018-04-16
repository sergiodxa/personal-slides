import cn from "classnames";

export function Icon({ type }) {
  const className = cn({ [type]: type });
  return (
    <span className={className}>
      <style jsx>{`
        span {
          border-radius: 50%;
          display: inline-block;
          width: 12px;
          height: 12px;
          position: absolute;
          top: 52%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
        }

        .close {
          background-color: #ff5f56;
          left: 13px;
        }

        .minimize {
          background-color: #ffbd2e;
          left: 33px;
        }

        .fullscreen {
          background-color: #27c93f;
          left: 53px;
        }
      `}</style>
    </span>
  );
}

export function Title({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          color: #999;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          position: absolute;
          top: 3px;
          left: 0;
          right: 0;
          text-align: center;
          width: 200px;
          margin: auto;
          border-radius: 4px;
          padding: 4px;
          user-select: none;
        }
      `}</style>
    </div>
  );
}

export function Header({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 100%;
          height: 36px;
          position: absolute;
        }
      `}</style>
    </div>
  );
}

export function Console({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          color: #fff;
          font-size: 12px;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          line-height: 24px;
          margin: 0 16px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export function Body({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          padding-top: 43px;
          position: absolute;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

export function Window({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          border: 1px solid #333;
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 5px;
          box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

export function Terminal({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 450px;
          height: 290px;
          border-radius: 5px;
          background: #000;
        }
      `}</style>
    </div>
  );
}

export default ({ children, title }) => (
  <Terminal>
    <Window>
      <Header>
        <Icon type="close" />
        <Icon type="minimize" />
        <Icon type="fullscreen" />
        <Title>{title}</Title>
      </Header>
      <Body>
        <Console>{children}</Console>
      </Body>
    </Window>
  </Terminal>
);
