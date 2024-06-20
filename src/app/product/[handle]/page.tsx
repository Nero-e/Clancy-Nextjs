import { ProductView } from "@/components/product/ProductView";
import { getProducts } from "@/services/products";
// import { useParams, useSearchParams } from "next/navigation";

interface ProductPageProps {
    searchParams: {
        id: string,
    }
}

export default async function productPage({ searchParams }: ProductPageProps){
    const id = searchParams.id;
    const products = await getProducts(id);
    const product = products[0];

    // const params = useParams();
    // const searchParams = useSearchParams();
    // const id = searchParams.get('id')
    // console.log(props.searchParams.id);

    console.log(products);
    
    return (
        <ProductView product={product}/>
    )
}