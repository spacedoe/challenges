import "./styles.css";

export default function App() {
  return <Greeting name="Jan" />;
}

function Greeting({ name }) {

  //Main task:
  // return <h1>Hello, {name}!</h1>
  

  //Bonus task:
  const coaches = ["Jan", "Marcell", "Klaus", "Yair", "Gemena"];
  // return <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>

  // Alternative solution:
  return <h1>Hello, {coaches.includes(name) ? "Coach" : name}!</h1>
}
