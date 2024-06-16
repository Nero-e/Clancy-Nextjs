import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      href={`/product/${product.handle}?id=${product.id}`}
      className=""
    >
      <article className="text-bone font-satoshi">
        <Image
          src={product.image}
          alt={product.title}
          quality={100}
          height={320}
          width={320}
          loading="eager"
        />
        <div className="">
          <h3>{product.title}</h3>
        </div>
        <span className="">
          ${product.price} USD
        </span>
      </article>
    </Link>
  );
};
