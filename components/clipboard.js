import { Component } from "react";
import { string } from "prop-types";

export default class extends Component {
  static propTypes = {
    write: string.isRequired
  };
  async componentDidMount() {
    try {
      await navigator.clipboard.writeText(this.props.write);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return null;
  }
}
