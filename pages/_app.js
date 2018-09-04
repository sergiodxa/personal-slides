import App, { Container } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import compose from "compose-function";

class PersonalSlides extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
        <NProgressStyles />
      </Container>
    );
  }
}

export default compose(
  withNProgress(300),
  withGA("UA-48432002-3", Router)
)(PersonalSlides);
