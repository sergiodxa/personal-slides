import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";

class Chat extends React.Component {
  state = {
    messages: [],
    message: "",
    connected: false
  };

  componentDidMount() {
    this.connect();
    this.listen();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.ws.close();
      this.connect();
      this.listen();
    }
  }

  componentWillUnmount() {
    this.ws.close();
  }

  connect = () => {
    this.ws = new WebSocket(this.props.url);
  };

  listen = () => {
    this.ws.onmessage = ({ data }) => {
      this.setState(state => ({
        messages: state.messages.concat(JSON.parse(data))
      }));
    };
    this.ws.onopen = () => this.setState({ connected: true });
    this.ws.onclose = () => this.setState({ connected: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { message } = this.state;
    this.ws.send(
      JSON.stringify({
        id: Date.now(),
        content: message
      })
    );
    this.setState({ message: "" });
  };

  render() {
    return (
      <>
        <h1>Chat</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            disabled={!this.state.connected}
            value={this.state.message}
            onChange={event => this.setState({ message: event.target.value })}
          />
          <button>Send</button>
        </form>
        <ul>
          {this.state.messages.map(message => (
            <li key={message.id}>{message.content}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Chat;
`;

export default () => (
  <Slide
    title="Effects in the Classy World"
    basePath="/slides/react-hooks"
    next="hooked/effects"
    prev="use-state"
    center
  >
    <H2>Effects in the Classy World</H2>
    <Code children={code} plain />
  </Slide>
);
