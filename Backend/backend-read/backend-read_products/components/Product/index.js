import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }
  
  console.log("data:", data);
  console.log("reviews", data.reviews);

  const { name, price, description, currency, reviews } = data;

  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
      </p>

      <div>
        {reviews.length > 0 ? (
          <>
            <h3>Reviews:</h3>
            {reviews.map((review, _id) => (
              <div key={_id}>
                <h4>{review.title}</h4>
                <p>
                  <i>{review.text}</i>
                </p>
                <p>Rating: {review.rating}</p>
                <hr />
              </div>
            ))}
          </>
        ) : (
          <p>No reviews avaialble.</p>
        )}
      </div>

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
