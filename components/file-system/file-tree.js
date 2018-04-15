import { Fragment } from "react";
import cn from "classnames";

import { H3 } from "../title";
import Case from "../case";

function TypeCase({ item, onPick, active, files }) {
  return (
    <Case
      value={item.type}
      onFile={<File key={item.id} {...item} onPick={onPick} active={active} />}
      onDirectory={
        <Directory
          key={item.id}
          {...item}
          files={files}
          onPick={onPick}
          active={active}
        />
      }
    />
  );
}

export function Directory({ files, name, children, onPick, active, first }) {
  const className = cn({ active });

  return (
    <ul className={className}>
      <li>{name}</li>

      {children
        .map(item => files[item])
        .map(item => (
          <TypeCase item={item} onPick={onPick} active={active} files={files} />
        ))}

      <style jsx>{`
        ul {
          padding-left: 0.75em;
          text-align: left;
          list-style-type: none;
        }

        .first {
          padding-left: 0;
        }

        li {
        }
      `}</style>
    </ul>
  );
}

export function File({ name, id, onPick, active = false }) {
  const className = cn({ active });

  return (
    <li onClick={onPick(id)} className={className}>
      {name}
      <style jsx>{`
        li {
          padding-left: 0.75em;
          cursor: pointer;
        }

        .active {
        }
      `}</style>
    </li>
  );
}

export default function FileTree({ files, onPick, active }) {
  return (
    <div>
      <H3>Explorer</H3>
      <ul>
        {Object.values(files)
          .filter(item => !item.parent)
          .map(item => (
            <TypeCase
              key={item.id}
              item={item}
              onPick={onPick}
              active={active}
              files={files}
            />
          ))}
      </ul>
      <style jsx>{`
        div {
          text-align: left;
          padding: 0 1em;
          box-sizing: border-box;
          min-width: 25%;
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        div :global(h3) {
          margin-bottom: 0;
        }
        ul {
          font-size: 0.75em;
          line-height: 1.5;
          padding-left: 0;
          margin-left: -0.75em;
          list-style-type: none;
          overflow-x: scroll;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
