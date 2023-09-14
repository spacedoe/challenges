import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 4,
      name: "🍉 Watermelon",
      color: "green",
    },
    {
      id: 5,
      name: "🥥 Coconut",
      color: "brown",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({id, name, color}) => {
        return <Card key={id} name={name} btnColor={color}/>;
      })}
    </div>
  );
}
