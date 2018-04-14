import { Component } from "react";
import Head from "next/head";
import Router from "next/router";
import { bool, number, string } from "prop-types";
import cn from "classnames";
import getKeyName from "../lib/get-key-name";
import { ThemeProvider, ThemeConsumer } from "../lib/theme";
import isServer from "../lib/is-server";

export default class extends Component {
  static propTypes = {
    className: string,
    title: string.isRequired,
    basePath: string.isRequired,
    current: number.isRequired,
    total: number.isRequired,
    dark: bool
  };

  static defaultProps = {
    className: "",
    title: "Slides",
    dark: false
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
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
    if (this.nextSlideNumber <= this.props.total) {
      return `${this.props.basePath}/${this.nextSlideNumber}`;
    } else {
      return `/${this.props.basePath}/1`;
    }
  }

  nextSlide = () => {
    Router.push(this.nextSlideURL);
  };

  get prevSlideNumber() {
    return this.props.current - 1;
  }

  get prevSlideURL() {
    if (this.prevSlideNumber > 0) {
      return `${this.props.basePath}/${this.prevSlideNumber}`;
    } else {
      return `${this.props.basePath}/${this.props.total}`;
    }
  }

  prevSlide = () => {
    Router.push(this.prevSlideURL);
  };

  render() {

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
                    background-color: ${dark ? "#ff0099" : "black"};
                    color: white;
                  }
                `}</style>
                <style jsx>{`
                  main {
                    display: flex;
                    justify-content: center;
                    height: 100vh;
                    text-align: center;
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
