import { Component } from "react";
import hljs from "highlight.js";
import { string } from "prop-types";

import Code from "../code";

const cache = new Map();

function checkCache(id) {
  if (cache.has(id)) return cache.get(id);
  return undefined;
}

export default class FileContent extends Component {
  static propTypes = {
    id: string.isRequired,
    content: string.isRequired
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id === prevState.id) return null;
    const { value } =
      checkCache(nextProps.id) || hljs.highlightAuto(nextProps.content);
    return { id: nextProps.id, content: value };
  }

  constructor(props) {
    super(props);
    this.state = FileContent.getDerivedStateFromProps(props, {});
  }

  render() {
    const { content } = this.state;
    return <Code>{content}</Code>;
  }
}
