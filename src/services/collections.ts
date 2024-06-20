import { env } from "@/config/env"
import { shopifyUrls } from "./urls"

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    })
    const { smart_collections } = await response.json()
    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle
      }
    })
    return transformedCollections
  } catch (error) {
    console.log(error)
  }
}

// export const getCollects = async () => {
//   try {
//     const response = await fetch(shopifyUrls.collections.collects, {
//       headers: new Headers({
//         'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
//       })
//     })
//     const { collects } = await response.json()
//     // const { collects } = await response.json()
//     // const transformedCollections = collects.map((collection: any) => {
//     //   return {
//     //     id: collection.id,
//     //     title: collection.title,
//     //     handle: collection.handle
//     //   }
//     // })
//     return collects
//   } catch (error) {
//     console.log(error)
//   }
// }



export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        'x-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }),
      cache: 'force-cache'
    });
    // throw new Error('Error');
    const {products} = await response.json();
    // const transformedProduct = products.map((product: any) => {
    //   return {
    //     id: product.id,
    //     title: product.title,
    //     handle: product.handle,
    //     image: product.image,
    //   }
    // })
    return products;
  } catch (error) {
    console.log(error)
  }
}