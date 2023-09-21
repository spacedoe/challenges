import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function theTwoTowers() {
    const volume1 = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");
    const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");
    const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <h1>{volume2.title}</h1>
      <Image
        src="/images/the-two-towers.png"
        alt="The Two Towers book cover"
        width={140}
        height={230}
      />
      <p>{volume2.description}</p>

      <ul>
        {volume2.books.map((book) => {
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
        <Link href={`/volumes/${volume1.slug}`}>
          Previous Volume: {volume1.title}
        </Link>
      </p>
      <p>
        <Link href={`/volumes/${volume3.slug}`}>
          Next Volume: {volume3.title}
        </Link>
      </p>

      <p>
        🔙 <Link href="/volumes">All Volumes</Link>
      </p>
    </>
  );
}
