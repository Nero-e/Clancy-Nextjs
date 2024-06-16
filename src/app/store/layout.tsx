import { getCollections } from "@/services/collections";
import Link from "next/link";
import React from "react";

export default async function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();
  return (
    <section className="flex flex-col">
      <nav className="text-bone px-11 py-5 font-satoshi">
        <ul className="">
          {collections?.map((collection: CollectionType) => (
            <Link
              key={collection.id}
              href={"/store/" + collection.handle}
              className="pr-1 hover:cursor-pointer hover:text-white hover:font-satoshiItalic"
            >
              /{collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </section>
  );
}