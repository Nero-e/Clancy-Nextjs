import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from './PlaceholderImage';

export const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-2 pt-10">
      <div className="w-[500px] h-[300px] relative">
        <Image
          src={'/images/Top.jpg'}
          alt="imagen"
          fill
          objectFit="cover"
          placeholder="blur"
          blurDataURL={PLACEHOLDER_IMAGE}
          className="rounded-lg"
        ></Image>
      </div>
      <div className="flex flex-col px-2 py-1 w-[500px] lg:w-[300px] gap-2">
        <h1 className="text-bone font-bold font-satoshi">Clancy</h1>
        <p className="text-bone font-satoshi">
          Can't feel my legs, I might suffocate, There's a pressure in my chest,
          I don't wanna be here, I don't wanna be here What's about to happen?
          What's about to happen?. I remember I remember certain things What I
          was wearin' The yellow dashes in the street I prayed those lights
          would take me home Then I heard, "Hey, kid, get out of the road!"
        </p>
      </div>
    </section>
  );
};
