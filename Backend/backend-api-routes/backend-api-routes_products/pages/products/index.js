import useSWR from "swr";
import Products from "@/components/ProductList";
import Link from "next/link";


export default function ProductsPage() {
  const { data: products, error, isLoading } = useSWR("/api/products");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(products);

  return (
    <>
      <h1>All Products:</h1>
      <Products products={products} />
      <Link href={"/"}>⬅ Back to Home Page</Link>
    </>
  );
}
