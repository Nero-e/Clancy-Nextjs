import { ProductCard } from "../ProductCard/ProductCard";

interface ProductsWrappperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrappperProps) => {
  return (
    <div className="flex flex-col justify-center items-center px-11">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
