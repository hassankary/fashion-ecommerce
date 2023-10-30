import Image from "next/image";
import Link from "next/link";

export default function Sustainability() {
  return (
    <div className="hidden group-hover:flex flex-row absolute left-0 top-0 mt-[112px] w-full bg-white text-black px-5 py-5 xl:px-[108px] xl:py-[52px] bg-gradient-to-r transition-all">
      <div className="flex lg:w-1/2 space-x-4 justify-start">
        <div className="flex-col text-left w-1/3">
          <div className="text-xl mt-6 lg:mt-0 font-bold">Sustainability</div>
          <div className="flex-col mt-6">
            <Link href="/">
              <h3 className="h-8 mt-2">Mission</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Processing</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Materials</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Packaging</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Product Care</h3>
            </Link>
            <Link href="/">
              <h3 className="h-8 mt-2">Out Suppliers</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 space-x-6 justify-end text-left">
        <div className="flex-col">
          <Image
            src="images/sub-sustainability1.svg"
            width={392}
            height={438}
            alt="pict1"
          />
        </div>
        <div className="flex-col">
          <Image
            src="images/sub-sustainability2.svg"
            width={392}
            height={438}
            alt="pict2"
          />
        </div>
      </div>
    </div>
  );
}
