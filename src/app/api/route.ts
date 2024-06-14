import { getProducts } from "@/services"

export async function GET() {
    const products = await getProducts()

    return Response.json({ products })
}