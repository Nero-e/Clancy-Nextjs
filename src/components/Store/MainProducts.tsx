import { getProducts } from '@/services/products';
import Image from 'next/image';

export const MainProducts = async () => {
  const products = await getProducts();
  // const { products } = await response.json();
  return (
    <section className="flex flex-col w-full pt-10 pb-10 justify-center items-center">
      <h3 className=" text-bone pt-2 text-center pb-10 font-alfredinoTuttocurvy font-bold text-4xl">
        New Products released ✨
      </h3>
      <div className="flex flex-col justify-center px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {products?.map((product: ProductType) => {
            const imageSrc = product.image;
            return (
              <div key={product.id} className="flex flex-col justify-end bg-bone bg-opacity-50 min-w-[500px] h-[300px] relative rounded-xl">
                <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center">
                  <Image
                    src={imageSrc}
                    alt={product.title}
                    style={{ objectFit: 'cover' }}
                    width={500}
                    height={300}
                    className="object-cover object-center w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center text-center z-20 bg-raisin-black bg-opacity-50 w-full h-11">
                  <h4 className="text-bone text-lg">{product.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </section>
  );
};
