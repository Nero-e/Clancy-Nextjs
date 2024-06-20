import { ProductsWrapper } from "@/components/Store/ProductsWrapper";
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
  const { categories } = props.params;

  let products = [];

  // const products2 = await getCollectionProducts('283171323965');

  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: CollectionType) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  }
  else{
    products = await getProducts();
  }

  return (
    <>
      <ProductsWrapper products={products} />
    </>
  );
}
