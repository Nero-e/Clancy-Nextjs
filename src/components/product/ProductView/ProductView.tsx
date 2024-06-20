import Image from "next/image";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <div className="flex">
      <section>
        <div className="flex flex-col justify-end bg-bone bg-opacity-50 min-w-[500px] h-[300px] relative rounded-xl">
          <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-lg">{product.tags}</p>
        <p className="text-lg">{product.description}</p>
      </section>
    </div>
  );
};
