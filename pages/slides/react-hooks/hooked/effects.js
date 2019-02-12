import Slide from "components/slide";
import { H2 } from "components/title";
import Code from "components/code";

const code = `import React from "react";

function Chat({ url }) {
  const ws = React.useRef(null);

  const [messages, setMessages] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [connected, setConnected] = React.useState(false);

  React.useEffect(() => {
    const server = new WebSocket(url);
    ws.current = server;
    return () => {
      ws.current = null;
      server.close();
    };
  }, [url]);

  React.useEffect(() => {
    if (ws.current) {
      ws.current.onmessage = ({ data }) =>
        setMessages(state => state.concat(JSON.parse(data)));
      ws.current.onopen = () => setConnected(true);
      ws.current.onclose = () => setConnected(false);
    }
  }, [ws.current]);

  function handleSubmit(event) {
    event.preventDefault();
    ws.current.send(
      JSON.stringify({
        id: Date.now(),
        content
      })
    );
    setContent("");
  }

  return (
    <>
      <h1>Chat</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          disabled={!connected}
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <button>Send</button>
      </form>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </>
  );
}

export default Chat;
`

export default () => (
  <Slide
    title="Effects & Ref in the Hooked World"
    basePath="/slides/react-hooks"
    next="use-effect"
    prev="classy/effects"
    center
  >
    <H2>Effects & Ref in the Hooked World</H2>
    <Code children={code} plain />
  </Slide>
);
