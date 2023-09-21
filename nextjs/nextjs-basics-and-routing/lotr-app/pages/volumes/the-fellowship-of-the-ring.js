import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const volume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");
  const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <h1>{volume1.title}</h1>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        alt="The Fellowship of The Ring book cover"
        width={140}
        height={230}
      />
      <p>{volume1.description}</p>
      <ul>
        {volume1.books.map((book) => {
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
        <Link href={`/volumes/${volume2.slug}`}>
          Next Volume: {volume2.title}
        </Link>
      </p>
      <p>
        🔙 <Link href="/volumes">All Volumes</Link>
      </p>
    </>
  );
}
