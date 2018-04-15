export default ({ bg = "#000", fg = "#fff", on = true, stroke = "#979797" }) =>
  on ? (
    <svg
      width="14px"
      height="12px"
      viewBox="0 0 14 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect fill={bg} x="0" y="0" width="12.4444444" height="12" rx="3" />
          <path
            d="M4,6 L6.19988776,8.12132034"
            stroke={fg}
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M6,1.75 L12.5996633,8.11396103"
            stroke={fg}
            strokeWidth="1.5"
            strokeLinecap="square"
            transform="translate(9.299832, 4.931981) scale(-1, 1) translate(-9.299832, -4.931981) "
          />
        </g>
      </g>
    </svg>
  ) : (
    <svg
      width="14"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <rect id="a" width="12" height="12" rx="3" />
      </defs>
      <rect
        stroke={stroke}
        x=".5"
        y=".5"
        width="11"
        height="11"
        rx="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
