import { Component } from "react";
import Head from "next/head";
import Router from "next/router";
import { bool, number, string } from "prop-types";
import cn from "classnames";
import NProgress from "nprogress";
import getKeyName from "../lib/get-key-name";
import { ThemeProvider, ThemeConsumer } from "../lib/theme";
import isServer from "../lib/is-server";
import { styles } from "../lib/nprogress";
import { styles as hljsStyles } from "../lib/highlight-styles";
import { event } from "../lib/analytics";
import * as colors from "../lib/colors";

let progressTimer = null;
Router.onRouteChangeStart = () => {
  progressTimer = setTimeout(NProgress.start, 300);
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
  clearTimeout(progressTimer);
};
Router.onRouteChangeError = () => {
  NProgress.done();
  clearTimeout(progressTimer);
};

export default class extends Component {
  static propTypes = {
    className: string,
    title: string.isRequired,
    basePath: string.isRequired,
    current: number,
    total: number,
    next: string,
    prev: string,
    dark: bool
  };

  static defaultProps = {
    className: "",
    title: "Slides",
    dark: false,
    total: 1
  };

  async componentDidMount() {
    const { total, next, prev } = this.props;
    if (total > 1 || next || prev) {
      window.addEventListener("keydown", this.handleKey);
    }
    await event({
      action: "slide view",
      description: `User accessed ${window.location.pathname}`
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  handleKey = event => {
    const keyCode = event.keyCode || event.which;
    const keyName = getKeyName(keyCode);

    switch (keyName) {
      case "right": {
        return this.nextSlide(event);
      }
      case "left": {
        return this.prevSlide(event);
      }
      default: {
        return null;
      }
    }
  };

  get nextSlideNumber() {
    return this.props.current + 1;
  }

  get nextSlideURL() {
    const { total, basePath, next } = this.props;

    if (next) {
      return next.startsWith(basePath) ? next : `${basePath}/${next}`
    }

    if (next === null) {
      return;
    }

    if (this.nextSlideNumber <= total) {
      return `${basePath}/${this.nextSlideNumber}`;
    } else {
      return `${basePath}/1`;
    }
  }

  nextSlide = async () => {
    if (this.nextSlideURL === null) return;
    await Router.push(this.nextSlideURL);
    await event({
      action: "slide view",
      description: `User accessed ${window.location.pathname}`
    });
  };

  get prevSlideNumber() {
    return this.props.current - 1;
  }

  get prevSlideURL() {
    const { total, basePath, prev } = this.props;

    if (prev) {
      return prev.startsWith(basePath) ? prev : `${basePath}/${prev}`
    }

    if (prev === null) {
      return null;
    }

    if (this.prevSlideNumber > 0) {
      return `${basePath}/${this.prevSlideNumber}`;
    } else {
      return `${basePath}/1`;
    }
  }

  prevSlide = async () => {
    if (this.prevSlideURL === null) return;
    await Router.push(this.prevSlideURL);
    await event({
      action: "slide view",
      description: `User accessed ${window.location.pathname}`
    });
  };

  render() {
    // prefetch previous and next slide page client side
    if (!isServer) {
      Router.prefetch(this.prevSlideURL);
      Router.prefetch(this.nextSlideURL);
    }

    const { center } = this.props;

    return (
      <ThemeProvider value={this.props.dark}>
        <ThemeConsumer>
          {dark => {
            const className = cn(this.props.className, { dark });

            return (
              <main className={className}>
                <Head>
                  <title>{this.props.title}</title>
                </Head>

                <div>{this.props.children}</div>

                <style jsx global>{`
                  body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                      Helvetica Neue, sans-serif;
                    font-size: 18px;
                    font-weight: 200;
                    transition: 300ms;
                  }
                  ::selection {
                    background-color: ${dark ? colors.pink : colors.black};
                    color: white;
                  }

                  :root {
                    --color: ${dark ? colors.pink : colors.black};
                  }
                `}</style>
                <style jsx global>
                  {styles}
                </style>
                <style jsx global>
                  {hljsStyles}
                </style>
                <style jsx>{`
                  main {
                    display: flex;
                    justify-content: center;
                    height: 100vh;
                    text-align: ${center ? "center" : "left"};
                    align-items: center;
                    padding: 1em;
                    box-sizing: border-box;
                  }
                  main.dark {
                    background: black;
                    color: white;
                  }
                `}</style>
              </main>
            );
          }}
        </ThemeConsumer>
      </ThemeProvider>
    );
  }
}
