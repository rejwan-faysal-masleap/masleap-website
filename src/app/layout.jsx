import Footer from "@/components/shared/footer";
import { Titillium_Web } from 'next/font/google';

const titillium_Web = Titillium_Web({
  weight: ['200', '400', '600', '700'],
  subsets: ['latin'],
})

import { NavbarDemo } from "@/components/shared/navbar";
import { DotBackgroundDemo } from "@/components/ui/dotbg";
import "./globals.css";

import AOSWrapper from "@/components/aos/AOSWrapper";

export const metadata = {
  title: "Masleap",
  description: "A leading Tech Company In Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium_Web.className}>
      <body>


        <NavbarDemo />
        <DotBackgroundDemo>
          <AOSWrapper>
            {children}
          </AOSWrapper>
        </DotBackgroundDemo>
        <Footer />
      </body>
    </html>
  );
}
