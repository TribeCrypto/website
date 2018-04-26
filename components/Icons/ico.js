import React from "react";
import styled from "styled-components";

export default ({ size, color }) => (
  <svg
    width={size ? size : "100%"}
    height={size ? size : "100%"}
    viewBox="0 0 306 306"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      enableBackground: "new 0 0 306 306"
    }}
  >
    <g id="Group" transform="translate(3.000000, 3.000000)">
      <circle
        id="Oval"
        stroke="#5fc19e"
        fill="#FFFFFF"
        strokeWidth="8"
        cx="150"
        cy="150"
        r="150"
      />
      <text
        id="ICO"
        fontFamily="SourceSansPro-Regular, Source Sans Pro"
        fontSize="120"
        fontWeight="normal"
      >
        <tspan x="64" y="179">
          ICO
        </tspan>
      </text>
      <path
        d="M49,260 L251,40"
        id="Line"
        stroke="#5fc19e"
        fill="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="square"
      />
    </g>
  </svg>
);
