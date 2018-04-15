export const H1 = ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        font-weight: lighter;
      }
      h1 :global(strong) {
        font-weight: normal;
      }
    `}</style>
  </h1>
);

export const H2 = ({ children }) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        font-weight: lighter;
      }
      h2 :global(strong) {
        font-weight: normal;
      }
    `}</style>
  </h2>
);

export const H3 = ({ children }) => (
  <h3>
    {children}
    <style jsx>{`
      h3 {
        font-weight: lighter;
      }
      h3 :global(strong) {
        font-weight: normal;
      }
    `}</style>
  </h3>
);