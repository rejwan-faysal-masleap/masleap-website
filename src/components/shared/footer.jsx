import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <>
      <div className="min-h-60 flex-center flex-col md:flex-row max-w-[1400px] mx-auto text-xl md:my-20 my-0">
        <div className="flex-[40%]">
          <section className="mb-6">
            <Link href="/" className="flex-center space-x-4">
              <Image
                src="/images/logo.png"
                alt="masleap-logo"
                width={70}
                height={70}
              />
              <p className=" font-medium text-3xl">Masleap</p>
            </Link>
          </section>
          <section className="uppercase space-y-1">
            <p>2/2 aysha mohol, shajahan road, Mohammadpur.</p>
            <p className="mt-2">Buckeystown Pike, Frederick, MD, USA Suite 250.</p>
            <div className="flex-center gap-x-2 mt-6">
               < IoMailOutline className="text-2xl"/>
            <p>contact@masleap.io</p>
            </div>
            <div className="flex-center gap-x-2">
               < FaPhone className="text-2xl"/>
           <p>+1 (301) 244-0147</p>
            </div>
            
          </section>
        </div>
        <div className="flex-[50%] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end  md:gap-x-24 md:pr-20 border-l-4 border-l-gray-950">
       
        <div alt="div1">
          <p className=" text-gray-900 pb-1.5 mb-5 border-b-4 border-b-[#1984bb] font-semibold">Company</p>
          <ul className="space-y-3">
            <li><a href="/about">About</a> Us</li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
         <div alt="div2">
          <p className=" text-gray-900 pb-1.5 mb-5 border-b-4 border-b-[#1984bb] font-semibold">Collaboration Models</p>
          <ul className="space-y-3">
            <li><a href="/web_app_dev">Web Application Development</a></li>
            <li><a href="/mobile_app_dev">Mobile App Development</a></li>
            <li><a href="/custom_soft_dev">Custom Software Development</a></li>
            <li><a href="/ui_ux_dev">Ui/Ux Design</a></li>
          </ul>
        </div>
        </div>

      </div>
        <p className="text-center font-medium text-xl mb-24">© 2025 masleap. All rights reserved.</p>
    </>
  );
};

export default Footer;
