import "@/styles/global.css";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.className} font-inter text-slate-50 container mx-auto px-5`}
    >
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
