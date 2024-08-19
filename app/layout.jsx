import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

import ThemeBtn from "@/components/ThemeBtn";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = Familjen_Grotesk({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-FamiljenGrotesk'
});

export const metadata = {
  title: "Portfolio",
  description: "for Nicolas Quinones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body 
        className={`${jetbrainsMono.variable} bg-gray-50 text-gray-950 relative 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <ThemeBtn />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
