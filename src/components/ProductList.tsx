import { Product } from "@/payload-types";
import ProductCard from "./ProductCard";
import Link from "next/link";

export interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const productCards = products.map((product) => {
    return (
      <Link href={`/products/${product.slug}`} key={product.id}>
        <ProductCard
          name={product.name}
          stock={product.stock}
          currency="IDR"
          price={product.priceIDR}
          image={typeof product.image === "object" ? (product.image.url ?? "") : ""}
          imageAlt={typeof product.image === "object" ? product.image.alt : ""}
        />
      </Link>
    );
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productCards}
      </div>
    </div>
  );
};

export default ProductList;
