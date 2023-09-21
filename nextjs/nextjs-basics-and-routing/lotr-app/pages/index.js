import Link from "next/link";
import { introduction } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <h1>Lord of the Rings 👑🗡️</h1>
      <p>{introduction}</p>

      <p>
        Go to <Link href="/volumes">Volumes</Link>
      </p>
    </>
  );
}
