import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter()



  function handleClick(){
    const randomSlug = volumes[Math.floor(Math.random() * volumes.length)].slug
    // const randomVolume = volumes[Math.floor(Math.random() * volumes.lenght)]
    console.log(randomSlug);
    router.push(`/volumes/${randomSlug}`)
    
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => 
         (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          ))}
      </ul>
      <button onClick={handleClick}>Go to a random Volume</button>
    </>
  );
}
