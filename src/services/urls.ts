import { env } from "@/config/env"

export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`
    },
    collections: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json`,
        'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/{${id}/product.json`,
        // 'collects': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/custom_collections.json`,
    }
}