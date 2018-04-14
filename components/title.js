export default ({ children }) => (
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
