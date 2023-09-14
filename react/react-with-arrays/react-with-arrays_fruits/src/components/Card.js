import "./Card.css";

export default function Card({ name, btnColor}) {
  return <p className={`card card--${btnColor}`}>{name}</p>;
}
