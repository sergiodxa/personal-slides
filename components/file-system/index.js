import { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import { objectOf, arrayOf, shape, oneOf, string } from "prop-types";

import FileTree from "components/file-system/file-tree";
import FileContent from "components/file-system/file-content";

const fileType = shape({
  id: string.isRequired,
  name: string.isRequired,
  type: oneOf(["file", "directory"]).isRequired,
  parent: string,
  children: arrayOf(string)
});

class FileSystem extends Component {
  static propTypes = {
    files: objectOf(fileType)
  };

  state = {
    file: this.props.defaultFile
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.router) return null;
    if (
      nextProps.router.query.file &&
      nextProps.router.query.file !== prevState.file
    ) {
      return { file: nextProps.router.query.file };
    }
    return null;
  }

  handlePick = file => () => {
    const { pathname, query } = Router;
    this.setState({ file }, () =>
      Router.replace(
        { pathname, query: { ...query, file } },
        { pathname, query: { ...query, file } },
        {
          shallow: true
        }
      )
    );
  };

  render() {
    const { files } = this.props;

    return (
      <div>
        <FileTree
          active={this.state.file}
          files={files}
          onPick={this.handlePick}
        />
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

export default withRouter(FileSystem);
