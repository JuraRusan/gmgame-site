import * as React from "react";

function SvgMonitiring(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 1792 1792"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M896 1629l640-349V644L896 877v752zm-64-865l698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" />
    </svg>
  );
}

export default SvgMonitiring;