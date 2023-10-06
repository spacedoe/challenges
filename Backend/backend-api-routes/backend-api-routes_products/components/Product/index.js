import Link from "next/link"
export default function Product({product}){
    return (
        <>
        <h1>Product details:</h1>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}{product.currency}</p>
        <p>{product.category}</p>
        <Link href={'/products/'}>⬅ Back to <strong>All Products</strong></Link>
        </>
    )


}