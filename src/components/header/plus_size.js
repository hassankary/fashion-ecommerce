import Image from "next/image";
import Link from "next/link";

export default function PlusSize() {
  return (
    <div className="hidden group-hover:flex flex-row absolute left-0 top-0 mt-[112px] w-full bg-white text-black px-5 py-5 xl:px-[108px] xl:py-[52px] bg-gradient-to-r transition-all">
      <div className="flex lg:w-1/2 space-x-4 justify-start">
        <div className="flex-col text-left w-1/3">
          <div className="text-xl mt-6 lg:mt-0 font-bold">Category</div>
          <div className="flex-col mt-6">
            <Link href="/">
              <h3 className="h-8 mt-2">Shop All</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Blouses & Top</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Pants</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Dresses & Jumpsuits</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Outwear & Jackets </h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Pullovers</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Tees</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Shorts & Skirts</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 space-x-6 justify-end text-left">
        <div className="flex-col">
          <Image
            src="images/sub-plussize1.svg"
            width={208}
            height={420}
            alt="pict1"
          />
          <h1 className="pt-3">Pants</h1>
        </div>
        <div className="flex-col">
          <Image
            src="images/sub-plussize2.svg"
            width={208}
            height={420}
            alt="pict2"
          />
          <h1 className="pt-3">Dresses</h1>
        </div>
        <div className="flex-col">
          <Image
            src="images/sub-plussize3.svg"
            width={208}
            height={420}
            alt="pict3"
          />
          <h1 className="pt-3">Boluses</h1>
        </div>
      </div>
    </div>
  );
}
