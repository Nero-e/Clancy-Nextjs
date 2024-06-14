import { shopifyUrls } from './urls';
import { env } from '@/config/env';

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        'x-Shopify-Access-Token': env.SHOPIFY_TOKEN,
      }),
    });
    // throw new Error('Error');
    const { products } = await response.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};
