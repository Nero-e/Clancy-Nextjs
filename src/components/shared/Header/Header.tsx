import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="">
          <ul className="flex flex-row justify-center gap-10 p-5 text-raisin-black font-bold font-satoshi text-lg bg-bone h-full w-full">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/test">Test</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
