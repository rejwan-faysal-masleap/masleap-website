import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <nav className="bg-white px-24 py-5 flex items-center justify-between">
        <section>
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
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-[#1984bb] hover:font-semibold">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="hover:text-[#1984bb] hover:font-semibold">
              <Link href="/about">About</Link> Us
            </li>
            <li className="hover:text-[#1984bb] hover:font-semibold">
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              {/* <Link href="/schedule"><button className=" transtarent-bg px-4 py-2 rounded-md cursor-pointer transition-all hover">Schedule A Call</button></Link> */}
              <Link href="/schedule">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                    Schedule A Call
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Header;
