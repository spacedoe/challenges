import Link from "next/link";
export default function ProductList({ products }) {
    console.log("products", products);
  return (
    <ul>
      {products.map((product) => {
       return <li key={product.id}><Link href={`/products/${product.id}`}>{product.name}</Link></li>;
      })}
    </ul>
  );
}
