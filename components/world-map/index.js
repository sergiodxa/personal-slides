import React from "react";
import Map from "./map";

const FONT_FAMILY_SANS =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const LOC_COUNT = 13;
const LOC_ARRAY = new Array(LOC_COUNT).fill().map((_, i) => i);

export default () => (
  <div>
    <div className="world-map-container">
      <div className="world-map">
        <Map />
        {LOC_ARRAY.map(i => [
          <span key={`spread-${i}`} className={`spread loc${i}`} />,
          <span key={`dot-${i}`} className={`dot loc${i}`} />
        ])}
      </div>
    </div>
    <style jsx>{`
      .world-map-container {
        position: relative;
      }
      .world-map-container .domain {
        animation-delay: 1s;
        animation-duration: 0.25s;
        animation-fill-mode: both;
        animation-name: domain-appear;
        animation-timing-function: linear;
        color: #fff;
        font-family: ${FONT_FAMILY_SANS};
        font-size: 15px;
        display: flex;
        opacity: 1;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
      }
      .world-map {
        width: 538px;
        height: 274px;
        margin: auto;
        position: relative;
      }
      .world-map .dot {
        background: #ffffff;
        border-radius: 50%;
        display: inline-block;
        width: 10px;
        height: 10px;
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .world-map .spread {
        background: transparent;
        border-radius: 50%;
        display: inline-block;
        width: 50px;
        height: 50px;
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .loc0 {
        top: 38%;
        left: 14%;
      }
      .loc1 {
        top: 29%;
        left: 50.5%;
      }
      .loc2 {
        top: 34.5%;
        left: 28%;
      }
      .loc3 {
        top: 82%;
        left: 88.5%;
      }
      .loc4 {
        top: 35%;
        left: 21.8%;
      }
      .loc5 {
        top: 43%;
        left: 20%;
      }
      .loc6 {
        top: 40.5%;
        left: 85.5%;
      }
      .loc7 {
        top: 30%;
        left: 47%;
      }
      .loc8 {
        top: 33.5%;
        left: 49%;
      }
      .loc9 {
        top: 63%;
        left: 76%;
      }
      .loc10 {
        top: 33.5%;
        left: 15%;
      }
      .loc11 {
        top: 41.5%;
        left: 16.5%;
      }
      .loc12 {
        top: 39.5%;
        left: 25.5%;
      }
      @keyframes domain-appear {
        from {
          opacity: 0;
          transform: translate(-50%, -100%);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
      @media screen and (max-width: 555px) {
        .world-map {
          width: 414px;
          height: 211px;
        }
        .world-map .dot {
          width: 7px;
          height: 7px;
        }
        .world-map .spread {
          width: 38px;
          height: 38px;
        }
      }
      @media screen and (max-width: 431px) {
        .world-map {
          width: 375px;
          height: 191px;
        }
        .world-map .dot {
          width: 6px;
          height: 6px;
        }
        .world-map .spread {
          width: 35px;
          height: 35px;
        }
      }
      @media screen and (max-width: 392px) {
        .world-map {
          width: 320px;
          height: 163px;
        }
        .world-map .dot {
          width: 5px;
          height: 5px;
        }
        .world-map .spread {
          width: 30px;
          height: 30px;
        }
      }
      @media screen and (max-width: 337px) {
        .world-map {
          width: 280px;
          height: 143px;
        }
        .world-map .dot {
          width: 4px;
          height: 4px;
        }
        .world-map .spread {
          width: 26px;
          height: 26px;
        }
      }
    `}</style>
    <style jsx global>{`
      // FIXME: for avoiding https://github.com/zeit/styled-jsx/issues/325
      // and https://github.com/zeit/styled-jsx/issues/326
      .world-map-container .dot {
        animation-delay: 1s;
        animation-duration: 0.8s;
        animation-iteration-count: 1;
        animation-fill-mode: backwards;
        animation-name: dot;
        animation-timing-function: ease-out;
      }
      .world-map .spread {
        animation-delay: 1s, 2.6s;
        animation-duration: 0.8s, 1.6s;
        animation-iteration-count: 1, infinite;
        animation-name: spread, spread-iteration;
        animation-timing-function: ease-out;
      }
      @keyframes dot {
        from {
          background: transparent;
        }
      }
      @keyframes spread {
        from {
          background: #ffffff;
          width: 0;
          height: 0;
        }
      }
      @keyframes spread-iteration {
        0% {
          background: #ffffff;
          width: 0;
          height: 0;
        }
        50%,
        100% {
          background: transparent;
          width: 50px;
          height: 50px;
        }
      }
    `}</style>
  </div>
);
