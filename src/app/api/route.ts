import { getProducts } from "@/services/products"
import { getCollections } from "@/services/collections"

export async function GET() {
    const products = await getProducts()
    const collections = await getCollections()

    return Response.json({ collections });
}