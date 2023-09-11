import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}

function Button({ color = "blue", disabled, text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      disabled={disabled}
      style={{ backgroundColor: color, color: "white" }}
    >
      {" "}
      {text}
    </button>
  );
}
