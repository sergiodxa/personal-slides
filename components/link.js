import Link from "next/link";

export default ({ children, href, external }) => {
  if (external) {
    return (
      <a href={href} target="_blank">
        {children}
        <style jsx>{`
          a {
            color: black;
            text-decoration: underline;
          }
          :global(main.dark) a {
            color: white;
          }
        `}</style>
      </a>
    );
  }
  return (
    <Link href={href}>
      <a href={href}>
        {children}
        <style jsx>{`
          a {
            color: black;
            text-decoration: underline;
          }
          :global(main.dark) a {
            color: white;
          }
        `}</style>
      </a>
    </Link>
  );
};
