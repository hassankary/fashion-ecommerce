import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="lg:flex bg-[#404040] px-5 py-5 xl:px-[108px] xl:py-[52px]">
        <div className="lg:w-1/2">
          <div className="text-sm md:text-xl font-bold">
            Join Our Club, Get 15% Off For Your Birthday
          </div>
          <form className="flex h-10 border border-white mt-6 max-w-[496px]">
            <input
              className="p-3 w-full text-xs bg-[#404040] "
              type="text"
              placeholder="Enter Your Email Address"
            ></input>
            <button className="p-3 " type="submit">
              <Image
                src="images/arrow_forward.svg"
                width={16}
                height={16}
              ></Image>
            </button>
          </form>
          <div className="flex mt-4 space-x-2">
            <input className="w-4 h-4" type="checkbox" />
            <p className=" text-xs">
              By Submitting your email, you agree to receive advertising emails
              from Modimal.
            </p>
          </div>
          <div className="space-x-4 lg:mt-[115px] hidden lg:flex">
            <Image src="images/iconig.svg" width={24} height={24}></Image>
            <Image src="images/iconfacebook.svg" width={24} height={24}></Image>
            <Image src="images/iconpath.svg" width={24} height={24}></Image>
            <Image src="images/icontiktok.svg" width={24} height={24}></Image>
          </div>
          <div className="text-xs font-[200] items-center space-x-2 hidden lg:flex lg:mt-[43px]">
            <Image src="images/copyright.svg" width={24} height={24}></Image>
            <p>2023 modimal. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex flex-wrap lg:w-1/2 justify-between">
          <div className="flex-col text-sm lg:text-xl">
            <div className=" mt-6 lg:mt-0 font-bold">About Modimal</div>
            <div className="flex-col mt-6">
              <Link href="/">
                <h3 className="h-8 mt-2">Collection</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Sustainability</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Privacy Policy</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Support System</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Terms & Condition</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Copyright Notice</h3>
              </Link>
            </div>
          </div>
          <div className="flex-col text-sm lg:text-xl">
            <div className="mt-6 lg:mt-0 font-bold">Help & Support</div>
            <div className="flex-col mt-6">
              <Link href="/">
                <h3 className="h-8 mt-2">Orders & Shipping</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Returns & Refunds</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">FAQs</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Contact Us</h3>
              </Link>
            </div>
          </div>
          <div className="flex-col text-sm lg:text-xl">
            <div className="mt-6 lg:mt-0 font-bold">Join Up</div>
            <div className="flex-col mt-6">
              <Link href="/">
                <h3 className="h-8 mt-2">Modimal Club</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Careers</h3>
              </Link>
              <Link href="/">
                <h3 className="h-8 mt-2">Visit Us</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-6 lg:hidden">
          <Image src="images/iconig.svg" width={24} height={24}></Image>
          <Image src="images/iconfacebook.svg" width={24} height={24}></Image>
          <Image src="images/iconpath.svg" width={24} height={24}></Image>
          <Image src="images/icontiktok.svg" width={24} height={24}></Image>
        </div>
        <div className="flex mt-6 text-xs font-[200] items-center space-x-2 lg:hidden">
          <Image src="images/copyright.svg" width={24} height={24}></Image>
          <p>2023 modimal. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
