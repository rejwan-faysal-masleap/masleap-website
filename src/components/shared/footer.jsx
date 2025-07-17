import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      {/* Optional gradient divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#1984bb] to-transparent" />

      <footer className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-800">
        {/* Left: Logo + Address + Contact */}
        <div>
          <Link href="/" className="flex items-center space-x-3 mb-6">
            <Image
              src="/images/logo.png"
              alt="masleap-logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold">Masleap</span>
          </Link>

          <div className="space-y-4 small-paragaraph leading-relaxed">
            <p>2/2 Aysha Mohol, Shajahan Road, Mohammadpur.</p>
            <p>Buckeystown Pike, Frederick, MD, USA Suite 250.</p>

            <div className="flex items-center gap-2 pt-4">
              <IoMailOutline className="text-xl" />
              <a href="mailto:contact@masleap.io" className="hover:underline">
                contact@masleap.io
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              <a href="tel:+13012440147" className="hover:underline">
                +1 (301) 244-0147
              </a>
            </div>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 gap-10 md:pl-16 border-t md:border-t-0 md:border-l-2 border-gray-300 pt-10 md:pt-0 md:mt-0">
          <div>
            <h4 className="small-paragaraph font-semibold mb-4 border-b-2 border-[#1984bb] inline-block">
              Company
            </h4>
            <ul className="space-y-3 small-paragaraph">
              <li><Link href="/Career" className="hover:text-[#1984bb]">Career</Link></li>
              <li><Link href="/blog" className="hover:text-[#1984bb]">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#1984bb]">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1984bb]">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="small-paragaraph font-semibold mb-4 border-b-2 border-[#1984bb] inline-block">
              Services
            </h4>
            <ul className="space-y-3 small-paragaraph">
              <li><Link href="/web_app_dev" className="hover:text-[#1984bb]">Web App Development</Link></li>
              <li><Link href="/mobile_app_dev" className="hover:text-[#1984bb]">Mobile App Development</Link></li>
              <li><Link href="/custom_soft_dev" className="hover:text-[#1984bb]">Custom Software Development</Link></li>
              <li><Link href="/ui_ux_dev" className="hover:text-[#1984bb]">UI/UX Design</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      <p className="text-center py-6 text-gray-500 mb-5">
        © 2025 Masleap. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
