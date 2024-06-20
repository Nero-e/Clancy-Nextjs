import { shopifyUrls } from './urls';
import { env } from '@/config/env';

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all

    const response = await fetch(apiUrl, {
      headers: new Headers({
        'x-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }),
    });
    // throw new Error('Error');
    const { products } = await response.json();
    const transformedProduct = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })
    return transformedProduct;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getMainProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        'x-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }),
      // cache
      cache: 'force-cache',
      // next: {
      //   revalidate: 10,
      // }
      next: {
        tags: ['main-products'],
      }
    });
    const { products } = await response.json();
    // const transformedProduct = products.map((product: any) => {
    //   return {
    //     id: product.id,
    //     gql_id: product.variants[0].admin_graphql_api_id,
    //     title: product.title,
    //     description: product.body_html,
    //     price: product.variants[0].price,
    //     image: product.images[0].src,
    //     quantity: product.variants[0].inventory_quantity,
    //     handle: product.handle,
    //     tags: product.tags,
    //   }
    // })
    return products;
  } catch (err) {
    // console.log(err);
    // return [];
  }
}