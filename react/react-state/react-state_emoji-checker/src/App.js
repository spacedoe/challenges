import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const validCode = "🐡🐠🐋";
  const [code, setCode] = useState("");
  console.log("code: ", code);

  function handleClick(emoji) {
    setCode(code + emoji);
  }

  // Alternative solution:

  // const handleClick = (event) => {
  //   console.log(event.target.textContent);

  //   const emoji = event.target.textContent;
  //   setCode(code + emoji);
  // };

  // then -> onClick={handleClick}

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleClick("🐡")}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐋")}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐠")}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
        }}
      >
        Reset
      </button>
      <h2>{code.length ? code : "?"}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
