import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;

  const [isActive, setActive] = useState(false)
  //       getter  setter        default value


  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    // Same:
    // isActive === true ? setActive(false) : setActive(true)
    setActive(!isActive)
  }

  // move console.log outside handleClick() function
  console.log(isActive);

  // Bonus task:
  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{ isActive ? "Deactivate" : "Activate"}</button>
    </main>
  );
}

