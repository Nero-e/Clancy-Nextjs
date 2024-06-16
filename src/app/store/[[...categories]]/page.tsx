import { ProductsWrapper } from "@/components/Store/ProductsWrapper/ProductsWrapper";
// import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "@/services/products";
import { getCollectionProducts, getCollections } from "@/services/collections";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts();
  const collections = await getCollections();
  const productsByCollections = await getCollectionProducts('283167981629');
  return (
    <>
      <ProductsWrapper products={products} />
    </>
  );
}
