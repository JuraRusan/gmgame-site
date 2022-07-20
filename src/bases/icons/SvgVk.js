import * as React from "react";

function SvgVk(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.color}
      viewBox="0 0 47 47"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="url(#a7)" d="M.336.019h46.252v46.252H.336z" />
      <defs>
        <pattern
          id="a7"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#b7" transform="scale(.00781)" />
        </pattern>
        <image
          id="b7"
          width={128}
          height={128}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgVk;
