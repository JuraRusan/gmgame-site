import * as React from "react";

function SvgMap3D(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 41 32"
    >
      <g fill={props.color}>
        <path d="M9.239 31.927c.009.006.021.003.03.009A.51.51 0 009.5 32a.5.5 0 00.132-.018L20.5 29.016l10.868 2.966A.5.5 0 0031.5 32a.492.492 0 00.23-.065c.01-.005.021-.003.03-.009l9-5.5a.501.501 0 00.22-.563l-4.984-17.5a.499.499 0 00-.726-.3l-4.962 2.784a.501.501 0 00.491.872l4.409-2.475 4.707 16.526-8.015 4.899-1.904-15.231a.5.5 0 00-.993.124l1.907 15.259L21 28.116v-2.73a.5.5 0 00-1 0v2.73l-9.911 2.705 1.907-15.259a.5.5 0 10-.993-.124L9.1 30.669l-8.015-4.898L5.792 9.246l4.409 2.475a.501.501 0 00.491-.872L5.729 8.064a.496.496 0 00-.725.3L.02 25.864a.498.498 0 00.22.563l8.999 5.5z" />
        <path d="M20.161 23.368a.5.5 0 00.675.003C21.169 23.068 29 15.882 29 8.5 29 3.733 25.267 0 20.5 0S12 3.733 12 8.5c0 7.254 7.828 14.56 8.161 14.868zM20.5 1C24.775 1 28 4.224 28 8.5c0 6.097-5.993 12.337-7.497 13.807C19.002 20.82 13 14.498 13 8.5 13 4.224 16.225 1 20.5 1z" />
        <path d="M25 8.5C25 6.019 22.981 4 20.5 4S16 6.019 16 8.5s2.019 4.5 4.5 4.5S25 10.981 25 8.5zM20.5 12c-1.93 0-3.5-1.57-3.5-3.5S18.57 5 20.5 5 24 6.57 24 8.5 22.43 12 20.5 12z" />
      </g>
    </svg>
  );
}

export default SvgMap3D;