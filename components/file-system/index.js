import { Component, Fragment } from "react";
import { objectOf, arrayOf, shape, oneOf, string } from "prop-types";

import FileTree from "./file-tree";
import FileContent from "./file-content";

const fileType = shape({
  id: string.isRequired,
  name: string.isRequired,
  type: oneOf(["file", "directory"]).isRequired,
  parent: string,
  children: arrayOf(string)
});

export default class FileSystem extends Component {
  static propTypes = {
    files: objectOf(fileType)
  };

  state = {
    file: this.props.defaultFile
  };

  handlePick = file => () => {
    this.setState({ file });
  };

  render() {
    const { files } = this.props;

    return (
      <div>
        <FileTree files={files} onPick={this.handlePick} />
        <FileContent {...files[this.state.file]} />

        <style jsx>{`
          div {
            border: 1px solid #4a4a4a;
            height: 50vh;
            display: flex;
            max-height: 400px;
            width: 550px;
          }
          div :global(.signature) {
            margin: 0;
            height: 100%;
            width: 75%;
          }
          div :global(.codesnippet) {
            border: none;
            padding: 0;
            height: 100%;
            overflow: scroll;
          }
          div :global(pre) {
            height: 100%;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
