import { useRouter } from "next/router";
import useSWR from "swr";
import Product from "@/components/Product";

export default function ProductsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }

  console.log("product", product);
  return <Product product={product} />;
}
