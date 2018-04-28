import Slide from "components/slide";
import { H1, H2 } from "components/title";
import { List, Item } from "components/list";
import Code from "components/code";

const code = `$ now domain buy sergiodxa.com`;

export default () => (
  <Slide
    title="zeit.domains - Find Your Perfect Domain"
    basePath="/slides/local-to-global"
    next="oss"
    prev="zeit.world"
    center
    dark
  >
    <H1>
      <strong>zeit.domains</strong> - Find Your Perfect Domain
    </H1>

    <H2>Buy Domains with a <strong>Single Command</strong></H2>

    <Code shell>{code}</Code>

    {/* <List>
      <Item>Free DNS</Item>
      <Item>Free SSL Certs</Item>
      <Item>Free WHOIS Privacy</Item>
      <Item>No Search Logs</Item>
      <Item>
        Built-in <Now color="white" height="12" width="13" /> Integration
      </Item>
      <Item>No Domain Parking Pages</Item>
    </List> */}
  </Slide>
);

function Logo(props) {
  const color = props.color || "#fff";
  return (
    <svg viewBox="0 0 40 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-626.000000, -61.000000)">
          <g transform="translate(628.000000, 63.000000)">
            <path stroke="#979797" />
            <g strokeWidth="2" stroke={color}>
              <polygon points="17.8444809 0.0466407108 35.6889618 31.9974443 0 31.9974443 " />
            </g>
            <path
              d="M34.0851064,31.5897436 L17.2340426,1.23076923"
              stroke={color}
              strokeLinecap="square"
            />
            <path
              d="M34.8510638,31.5897436 L18,1.23076923"
              stroke={color}
              strokeLinecap="square"
            />
            <path
              d="M33.3191489,31.5897436 L17.2340426,2.05128205"
              stroke={color}
              strokeLinecap="square"
            />
            <path
              d="M32.5531915,31.5897436 L17.2340426,2.87179487"
              stroke={color}
              strokeLinecap="square"
            />
            <path
              d="M16.4680851,2.87179487 L33.3191489,31.5897436"
              stroke={color}
              strokeLinecap="square"
            />
            <path
              d="M31.787234,31.5897436 L16.4680851,3.69230769"
              stroke={color}
              strokeLinecap="square"
            />
            <path
              d="M28.7234043,25.025641 L22.5957447,14.3589744"
              stroke={color}
              strokeLinecap="square"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Now(props) {
  const width = props.width || 9;
  const height = props.height || 8;
  const color = props.color || "#fff";
  return (
    <span className="now" style={{ color }}>
      <span style={{ width: `${width}px`, height: `${height}px` }}>
        <Logo color={color} />
      </span>now
      <style jsx>
        {`
          span span {
            display: inline-block;
            margin-right: 3px;
          }
        `}
      </style>
    </span>
  );
}
