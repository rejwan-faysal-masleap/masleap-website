import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <nav className="bg-white px-24 py-5 flex items-center justify-between">
        <section >
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/masleaplogo.png"
              alt="masleap-logo"
              width="70"
              height="70"
            />
            <p className=" font-semibold text-3xl">Masleap</p>
          </Link>
        </section>
        <section>
          <ul className="flex-center space-x-10 text-xl font-semibold">
            <li className="hover:text-[#1984bb] hover:font-semibold active:text-[#1984bb]">
              <Link href="google.com">Services</Link>
            </li>
            <li className="hover:text-[#1984bb] hover:font-semibold">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#1984bb] hover:font-semibold">
              <Link href="/about">About</Link> Us
            </li>
            <li className="hover:text-[#1984bb] hover:font-semibold">
              <Link href="/contact">Contact</Link>
            </li>
            <li >
              <Link href="/schedule"><button className="px-4 py-2 rounded-md cursor-pointer bg-[#1984bb] hover:shadow-none transition-all">Schedule A Call</button></Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Header;
