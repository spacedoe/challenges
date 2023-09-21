import Link from "next/link";
import { volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h2>All Volumes</h2>

      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
