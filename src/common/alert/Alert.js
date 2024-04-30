import React from "react";

let BaseIcon = function BaseIcon(_ref) {
  let color = _ref.color,
    _ref$pushRight = _ref.pushRight,
    pushRight = _ref$pushRight === undefined ? true : _ref$pushRight,
    children = _ref.children;
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        marginRight: pushRight ? "12px" : "0",
        minWidth: 24,
      },
    },
    children
  );
};

let InfoIcon = function InfoIcon() {
  return React.createElement(
    BaseIcon,
    { color: "rgba(255, 180, 0, 1)", pushRight: true },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "8" })
  );
};

let SuccessIcon = function SuccessIcon() {
  return React.createElement(
    BaseIcon,
    { color: "rgba(0, 255, 0, 1)", pushRight: true },
    React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })
  );
};

let ErrorIcon = function ErrorIcon() {
  return React.createElement(
    BaseIcon,
    { color: "rgba(255, 0, 0, 1)", pushRight: true },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    React.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "16" })
  );
};

let CloseIcon = function CloseIcon() {
  return React.createElement(
    BaseIcon,
    { color: "#FFFFFF", pushRight: false },
    React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  );
};

let _extends =
  Object.assign ||
  function (target) {
    for (let i = 1; i < arguments.length; i++) {
      let source = arguments[i];

      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

let alertStyle = {
  backgroundColor: "rgba(39, 39, 42, 1)",
  color: "rgba(244, 244, 244, 1)",
  padding: "8px",
  textTransform: "uppercase",
  borderRadius: "4px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.35)",
  width: "auto",
  minWidth: "300px",
  maxWidth: "600px",
  boxSizing: "border-box",
};

let textStyle = {
  flex: "2",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "24px",
  minHeight: "24px",
  height: "auto",
};

let buttonStyle = {
  marginLeft: "12px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "rgba(244, 244, 244, 1)",
  height: "24px",
};

let Alert = function Alert(_ref) {
  let message = _ref.message,
    options = _ref.options,
    style = _ref.style,
    close = _ref.close;

  return React.createElement(
    "div",
    { style: _extends({}, alertStyle, style) },
    options.type === "info" && React.createElement(InfoIcon, null),
    options.type === "success" && React.createElement(SuccessIcon, null),
    options.type === "error" && React.createElement(ErrorIcon, null),
    React.createElement("span", { style: textStyle }, message),
    React.createElement("button", { onClick: close, style: buttonStyle }, React.createElement(CloseIcon, null))
  );
};

export default Alert;
