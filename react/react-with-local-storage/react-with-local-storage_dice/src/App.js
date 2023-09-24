import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [rolls, setRolls] = useState([]);
  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll}/>
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
