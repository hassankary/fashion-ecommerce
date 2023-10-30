import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "../footer/footer";

export default function Collection() {
  return (
    <div className="hidden group-hover:flex flex-row absolute left-0 top-0 mt-[112px] w-full bg-white text-black px-5 py-5 xl:px-[108px] xl:py-[52px] bg-gradient-to-r transition-all">
      <div className="flex lg:w-1/2 space-x-4 justify-between">
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
        <div className="flex-col text-left w-1/3">
          <div className="text-xl mt-6 lg:mt-0 font-bold">Featured</div>
          <div className="flex-col mt-6">
            <Link href="/">
              <h3 className="h-8 mt-2">New in</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Modiweek</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Plus Size</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Best Seller</h3>
            </Link>
          </div>
        </div>
        <div className="flex-col text-left w-1/3">
          <div className="text-xl mt-6 lg:mt-0 font-bold">More</div>
          <div className="flex-col mt-6">
            <Link href="/">
              <h3 className="h-8 mt-2">Bundles</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Occasion Wear</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Matching Set</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Suiting</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 space-x-6 justify-end text-left">
        <div className="flex-col">
          <Image
            src="images/sub-collection.svg"
            width={288}
            height={420}
            alt="pict1"
          />
          <h1 className="pt-3">Bundles</h1>
        </div>
        <div className="flex-col">
          <Image
            src="images/sub-collection2.svg"
            width={288}
            height={420}
            alt="pict1"
          />
          <h1 className="pt-3">Plus Size</h1>
        </div>
      </div>
    </div>
  );
}
