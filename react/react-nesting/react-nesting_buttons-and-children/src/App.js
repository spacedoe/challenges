import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button backgroundColor="beige">Click me!</Button>
      <Button backgroundColor="grey">No, click me!</Button>
      <Button backgroundColor="black">No, me!</Button>
      <Button backgroundColor="pink">MEE MEE MEE!</Button>
    </main>
  );
}

function Button({ children, backgroundColor }) {
  return (
    <button className="button" type="button" style={{ backgroundColor }}>
      {children}
    </button>
  );
}
