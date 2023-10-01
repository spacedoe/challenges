import { useState } from "react";
import Link from "../components/Link";

export default function HomePage({ lights }) {
  const isOnLights = lights.filter((light) => light.isOn === true).length;

  return (
    <div>
      <h1>Home</h1>
      <p> {isOnLights} light(s) are on.</p>
      <p>
        <Link href="/rooms">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
