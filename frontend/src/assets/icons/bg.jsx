import React from 'react'
export default function BG() {
  return (
    <svg
      height="100%"
      id="patternId"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          height="40"
          id="a"
          patternTransform="scale(2) rotate(0)"
          patternUnits="userSpaceOnUse"
          width="40"
        >
          <rect
            fill="hsla(0, 0%, 0%, 1)"
            height="100%"
            width="100%"
            x="0"
            y="0"
          />
          <path
            d="M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z"
            fill="none"
            stroke="hsla(259, 100%, 97%, 1)"
            strokeWidth="1"
          />
          <path
            d="M20 25a5 5 0 110-10 5 5 0 010 10z"
            fill="none"
            stroke="hsla(340, 100%, 92%, 1)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect
        fill="url(%23a)"
        height="800%"
        transform="translate(-24,0)"
        width="800%"
      />
    </svg>
  )
}
