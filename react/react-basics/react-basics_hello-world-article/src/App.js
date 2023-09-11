import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
  

}

function HelloWorldArticle() {
  return (
    <article>
      <h1>My article</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
    </article>
  );
}
