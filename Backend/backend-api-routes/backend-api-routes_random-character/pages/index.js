import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data:character, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("character", character);
  console.log("character", character.name);

  const {name, age, city, company, email, twitter, geohash} = character
  

  return (
    <>
      <h1>User details:</h1>
      <p>Full name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Company: {company}</p>
      <p>Email: {email}</p>
      <p>Twitter: {twitter}</p>
      <p>Geohash: {geohash}</p>
    </>
  )
}
