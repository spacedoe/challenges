import React from "react";
import "./styles.css";

export default function App() {
  
  // returns Happy smiley:
  return <Smiley isHappy />;

  // returns Sad smiley:
  // return <Smiley />;
}

function Smiley({ isHappy }) {
  return <h1> {isHappy ? "😄" : "😔"}</h1>;
}
