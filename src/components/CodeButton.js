function CodeButton() {
  return (
    <button className="code-btn">
      <svg
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 18l6-6l-6-6"></path>
          <path d="M8 6l-6 6l6 6"></path>
        </g>
      </svg>
    </button>
  );
}

export default CodeButton;
