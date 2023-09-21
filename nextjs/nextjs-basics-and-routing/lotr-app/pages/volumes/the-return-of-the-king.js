import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const volume1 = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");
  const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");
  const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <h1>{volume3.title}</h1>
      <Image
        src="/images/the-return-of-the-king.png"
        alt="The Return of The King book cover"
        width={140}
        height={230}
      />
      <p>{volume3.description}</p>

      <ul>
        {volume3.books.map((book) => {
          return (
            <li key={book.ordinal}>
              <em>
                {book.ordinal} {book.title}
              </em>
            </li>
          );
        })}
      </ul>

      <p>
        <Link href="/volumes/the-two-towers">
          Previous Volume: {volume2.title}
        </Link>
      </p>
      <p>
        🔙 <Link href="/volumes">All Volumes</Link>
      </p>
    </>
  );
}
