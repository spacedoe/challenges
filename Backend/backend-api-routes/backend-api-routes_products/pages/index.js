import Link from "next/link"
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Fish Shop 🐠 🐡 🐟 !</h1>

      <Link href={"/products"}>See All Products:</Link>
    </div>
  );
}
