import { Component } from "react";
import hljs from "highlight.js";
import { string } from "prop-types";

import Code from "components/code";

const cache = new Map();

function checkCache(id) {
  if (cache.has(id)) return cache.get(id);
  return undefined;
}

function highlight(content, type = false) {
  if (type) {
    hljs.highlight(type, content);
  }
  return hljs.highlightAuto(content);
}

export default class FileContent extends Component {
  static propTypes = {
    id: string.isRequired,
    content: string.isRequired,
    contentType: string
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id === prevState.id) return null;
    const { value } =
      checkCache(nextProps.id) ||
      highlight(nextProps.content, nextProps.contentType);
    cache.set(nextProps.id, { value });
    return { id: nextProps.id, content: value };
  }
  
  state = FileContent.getDerivedStateFromProps(this.props, {});

  render() {
    const { content } = this.state;
    return <Code>{content}</Code>;
  }
}
