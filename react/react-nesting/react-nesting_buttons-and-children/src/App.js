import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button btnColor="red">
        <p>Click me!</p>
      </Button>
      <Button btnColor="blue">
        <p>No, click me!</p>
      </Button>
      <Button btnColor="green">
        <p>No, me!</p>
      </Button>
      <Button btnColor="yellow">
        <p>MEE MEE MEE!</p>
      </Button>
    </main>
  );
}

function Button({ children, btnColor }) {
  return (
    <button className={`button ${btnColor}`} type="button">
      {children}
    </button>
  );
}
