import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(message) {
    console.log(message);
  }
  return (
    <>
      <Button
        color="green"
        disabled={false}
        text="Safe Button"
        // This way handleClick function is only executed once the button is clicked.
        onButtonClick={() => handleClick("Safe button is clicked!")}
      />
      <Button
        color="red"
        disabled={false}
        text="Danger Button"
        onButtonClick={() => handleClick("Danger button is clicked!")}
      />
    </>
  );
}

function Button({ color, disabled, text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      disabled={disabled}
      style={{ backgroundColor: color, color: "white" }}
    >
      {text}
    </button>
  );
}
