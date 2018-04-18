import { PureComponent } from "react";
import { number } from "prop-types";

const states = [
  "⠋",
  "⠙",
  "⠹",
  "⠸",
  "⠼",
  "⠴",
  "⠦",
  "⠧",
  "⠇",
  "⠏",
  "⠋",
  "⠙",
  "⠹",
  "⠸"
];

class Spinner extends PureComponent {
  static propTypes = {
    initial: number,
    time: number
  };

  static defaultProps = {
    initial: 0,
    time: 50
  };

  state = { position: 0  };

  max = states.length - 1;

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState(state => {
          const next = state.position + 1;
          if (next > this.max) return { position: 0 };
          return { position: next };
        }),
      this.props.time
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return states[this.state.position];
  }
}

export default Spinner;